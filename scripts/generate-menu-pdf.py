from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    FrameBreak,
    Image,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "dist" / "menu-pdf"
DATA_PATH = OUTPUT_DIR / "menu-data.json"
PDF_PATH = OUTPUT_DIR / "glysteri-menu.pdf"
CATALOG_WIDTH = 155 * mm
CATALOG_HEIGHT = 210 * mm
CATALOG_OFFSET_X = 20 * mm
PAGE_SIZE = (CATALOG_OFFSET_X + CATALOG_WIDTH, CATALOG_HEIGHT)
LOGO_PATH = ROOT / "dist" / "glisteri_v2" / "images" / "header" / "logo.png"
if not LOGO_PATH.exists():
    LOGO_PATH = ROOT / "src" / "images" / "header" / "logo.png"

WOOD_950 = colors.HexColor("#160f09")
WOOD_900 = colors.HexColor("#2b1b10")
WOOD_700 = colors.HexColor("#6f4a2e")
WOOD_500 = colors.HexColor("#a9784f")
SAND_100 = colors.HexColor("#fbf1df")
SAND_200 = colors.HexColor("#ead8bd")
AGED_GOLD = colors.HexColor("#c79d58")
GAP_GOLD = colors.HexColor("#a87946")
DARK_MAT = colors.HexColor("#2f3029")
BLUE_GREY_MAT = colors.HexColor("#4b4d45")
DRIFTWOOD = colors.HexColor("#5b3a24")
DRIFTWOOD_LIGHT = colors.HexColor("#8f6743")
SEA_BLUE = colors.HexColor("#168aa4")
SEA_BLUE_DARK = colors.HexColor("#075b70")
BABY_BLUE = colors.HexColor("#46acc4")
PEARL_BLUE = colors.HexColor("#8bd7e6")
LAGOON_GLOW = colors.HexColor("#1fa6bc")
COAST_GREEN = colors.HexColor("#6f8c4d")
AGAVE_GREEN = colors.HexColor("#c98523")
THATCH = colors.HexColor("#c2a46d")
TREE_INK = colors.HexColor("#2a2019")
INK = colors.HexColor("#26180f")
MUTED = colors.HexColor("#6c5848")
TEXT_LIGHT = colors.HexColor("#f4eadc")
TEXT_MUTED_LIGHT = colors.HexColor("#d6c4b0")


def register_fonts() -> tuple[str, str]:
    regular_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf"),
        Path("/Library/Fonts/Arial Unicode.ttf"),
        ROOT / "src" / "fonts" / "r.ttf",
    ]
    bold_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        Path("/Library/Fonts/Arial Bold.ttf"),
        regular_candidates[0],
    ]

    regular = next(path for path in regular_candidates if path.exists())
    bold = next(path for path in bold_candidates if path.exists())
    pdfmetrics.registerFont(TTFont("MenuRegular", str(regular)))
    pdfmetrics.registerFont(TTFont("MenuBold", str(bold)))
    return "MenuRegular", "MenuBold"


FONT_REGULAR, FONT_BOLD = register_fonts()


def text(value: Any, lang: str) -> str:
    if isinstance(value, dict):
        return str(value.get(lang) or "").strip()
    return str(value or "").strip()


def is_legend(category: dict[str, Any]) -> bool:
    return text(category.get("title"), "en").lower() == "legent"


def menu_categories(data: dict[str, Any], is_rest: bool) -> list[dict[str, Any]]:
    return [
        category
        for category in data["categories"]
        if bool(category.get("isRest")) == is_rest and not is_legend(category)
    ]


def price(value: Any) -> str:
    raw = str(value or "").strip()
    return f"{raw}€" if raw else ""


def para_style(name: str, **kwargs: Any) -> ParagraphStyle:
    return ParagraphStyle(name, fontName=FONT_REGULAR, leading=11, **kwargs)


styles = getSampleStyleSheet()
STYLE_COVER_TITLE = ParagraphStyle(
    "CoverTitle",
    fontName=FONT_BOLD,
    fontSize=31,
    leading=36,
    textColor=INK,
    alignment=TA_CENTER,
    spaceAfter=8,
)
STYLE_COVER_SUBTITLE = ParagraphStyle(
    "CoverSubtitle",
    fontName=FONT_REGULAR,
    fontSize=10,
    leading=14,
    textColor=SEA_BLUE_DARK,
    alignment=TA_CENTER,
)
STYLE_SECTION_EL = ParagraphStyle(
    "SectionEl",
    fontName=FONT_REGULAR,
    fontSize=9,
    leading=12,
    textColor=SEA_BLUE_DARK,
    alignment=TA_LEFT,
)
STYLE_SECTION_EN = ParagraphStyle(
    "SectionEn",
    fontName=FONT_BOLD,
    fontSize=21,
    leading=25,
    textColor=INK,
    alignment=TA_RIGHT,
)
STYLE_CATEGORY_EL = ParagraphStyle(
    "CategoryEl",
    fontName=FONT_BOLD,
    fontSize=13,
    leading=16,
    textColor=DRIFTWOOD,
)
STYLE_CATEGORY_EN = ParagraphStyle(
    "CategoryEn",
    fontName=FONT_BOLD,
    fontSize=13,
    leading=16,
    textColor=DRIFTWOOD,
    alignment=TA_LEFT,
)
STYLE_ITEM_TITLE = ParagraphStyle(
    "ItemTitle",
    fontName=FONT_BOLD,
    fontSize=8.7,
    leading=10.5,
    textColor=INK,
)
STYLE_ITEM_DESC = ParagraphStyle(
    "ItemDesc",
    fontName=FONT_REGULAR,
    fontSize=7.4,
    leading=9.2,
    textColor=MUTED,
)
STYLE_PRICE = ParagraphStyle(
    "Price",
    fontName=FONT_BOLD,
    fontSize=8.7,
    leading=10,
    textColor=INK,
    alignment=TA_RIGHT,
)
STYLE_LEGEND_TITLE = ParagraphStyle(
    "LegendTitle",
    fontName=FONT_BOLD,
    fontSize=7.2,
    leading=9,
    textColor=SEA_BLUE_DARK,
    spaceBefore=4,
    spaceAfter=2,
)
STYLE_LEGEND = ParagraphStyle(
    "Legend",
    fontName=FONT_REGULAR,
    fontSize=6.2,
    leading=7.2,
    textColor=MUTED,
)


def draw_sun(canvas, x: float, y: float, radius: float, color=colors.HexColor("#e4b073")) -> None:
    canvas.saveState()
    canvas.setStrokeColor(color)
    canvas.setFillColor(color)
    canvas.setLineWidth(2)
    canvas.circle(x, y, radius, stroke=0, fill=1)
    for index in range(8):
        angle = math.pi * 2 * index / 8
        inner = radius + 6
        outer = radius + 16
        canvas.line(
            x + math.cos(angle) * inner,
            y + math.sin(angle) * inner,
            x + math.cos(angle) * outer,
            y + math.sin(angle) * outer,
        )
    canvas.restoreState()


def draw_bow(canvas, x: float, y: float, width: float, height: float, count: int, color) -> None:
    canvas.saveState()
    canvas.setStrokeColor(color)
    canvas.setLineWidth(1.1)
    for index in range(count):
        inset = index * 5
        canvas.arc(x + inset, y - inset, x + width - inset, y + height + inset, 0, 180)
    canvas.restoreState()


def draw_boho_leaf(canvas, x: float, y: float, scale: float, color) -> None:
    canvas.saveState()
    canvas.setStrokeColor(color)
    canvas.setLineWidth(0.9)
    canvas.line(x, y, x, y + 26 * scale)
    for index in range(5):
        yy = y + (6 + index * 4) * scale
        canvas.line(x, yy, x - (7 + index) * scale, yy + 5 * scale)
        canvas.line(x, yy, x + (7 + index) * scale, yy + 5 * scale)
    canvas.restoreState()


def draw_branch(canvas, x: float, y: float, length: float, angle: float, depth: int, scale: float) -> None:
    if depth <= 0 or length < 2:
        return

    radians = math.radians(angle)
    x2 = x + math.cos(radians) * length
    y2 = y + math.sin(radians) * length
    canvas.line(x, y, x2, y2)

    next_length = length * 0.68
    draw_branch(canvas, x2, y2, next_length, angle + 24, depth - 1, scale)
    draw_branch(canvas, x2, y2, next_length * 0.82, angle - 31, depth - 1, scale)
    if depth % 2 == 0:
        draw_branch(canvas, x2, y2, next_length * 0.5, angle + 54, depth - 1, scale)


def draw_tree(canvas, x: float, y: float, scale: float, color, alpha: float = 0.42) -> None:
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(color.red, color.green, color.blue, alpha=alpha))
    canvas.setLineCap(1)
    canvas.setLineWidth(2.1 * scale)
    trunk_top_x = x + 4 * mm * scale
    trunk_top_y = y + 42 * mm * scale
    canvas.line(x, y, trunk_top_x, trunk_top_y)
    canvas.setLineWidth(1.25 * scale)
    draw_branch(canvas, trunk_top_x, trunk_top_y, 22 * mm * scale, 92, 4, scale)
    draw_branch(canvas, x + 2 * mm * scale, y + 24 * mm * scale, 20 * mm * scale, 145, 4, scale)
    draw_branch(canvas, x + 3 * mm * scale, y + 30 * mm * scale, 22 * mm * scale, 35, 4, scale)
    draw_branch(canvas, x + 1 * mm * scale, y + 14 * mm * scale, 17 * mm * scale, 205, 3, scale)
    canvas.restoreState()


def draw_stones_and_grass(canvas, width: float, y: float, color) -> None:
    canvas.saveState()
    canvas.setFillColor(colors.Color(0.33, 0.43, 0.27, alpha=0.16))
    for index in range(16):
        x = 12 * mm + index * 8.5 * mm
        canvas.rect(x, y + (index % 3) * 1.2 * mm, 0.45 * mm, 4 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.Color(color.red, color.green, color.blue, alpha=0.18))
    for index in range(10):
        x = 18 * mm + index * 12 * mm
        canvas.ellipse(x, y - 1 * mm + (index % 2) * 2 * mm, x + 5 * mm, y + 2.8 * mm + (index % 2) * 2 * mm, fill=1, stroke=0)
    canvas.restoreState()


def draw_wood_grain(canvas, x: float, y: float, width: float, height: float, horizontal: bool = True) -> None:
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(0.16, 0.10, 0.06, alpha=0.22))
    canvas.setLineWidth(0.35)
    count = 9 if horizontal else 7
    for index in range(count):
        if horizontal:
            yy = y + height * (index + 1) / (count + 1)
            canvas.line(x + 3 * mm, yy, x + width - 3 * mm, yy + math.sin(index) * 1.2 * mm)
        else:
            xx = x + width * (index + 1) / (count + 1)
            canvas.line(xx, y + 3 * mm, xx + math.sin(index) * 0.9 * mm, y + height - 3 * mm)
    canvas.restoreState()


def draw_wood_frame(canvas, width: float, height: float, cover: bool = False) -> None:
    border = 3.5 * mm if not cover else 5 * mm
    canvas.saveState()
    canvas.setFillColor(DRIFTWOOD)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)

    canvas.setFillColor(DRIFTWOOD_LIGHT)
    canvas.rect(0, height - border, width, border, fill=1, stroke=0)
    canvas.rect(0, 0, width, border, fill=1, stroke=0)
    canvas.rect(0, 0, border, height, fill=1, stroke=0)
    canvas.rect(width - border, 0, border, height, fill=1, stroke=0)
    draw_wood_grain(canvas, 0, height - border, width, border, horizontal=True)
    draw_wood_grain(canvas, 0, 0, width, border, horizontal=True)
    draw_wood_grain(canvas, 0, 0, border, height, horizontal=False)
    draw_wood_grain(canvas, width - border, 0, border, height, horizontal=False)

    canvas.setFillColor(SAND_100 if cover else SAND_200)
    canvas.rect(border, border, width - border * 2, height - border * 2, fill=1, stroke=0)

    canvas.setStrokeColor(colors.Color(SEA_BLUE.red, SEA_BLUE.green, SEA_BLUE.blue, alpha=0.48))
    canvas.setLineWidth(0.85 if cover else 0.55)
    inset = border + 2.2 * mm
    canvas.rect(inset, inset, width - inset * 2, height - inset * 2, stroke=1, fill=0)
    canvas.restoreState()


def draw_thatch(canvas, width: float, height: float, cover: bool = False) -> None:
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(THATCH.red, THATCH.green, THATCH.blue, alpha=0.38 if cover else 0.22))
    canvas.setLineWidth(0.45)
    top = height - (13 * mm if cover else 9 * mm)
    for index in range(32):
        x = 8 * mm + index * (width - 16 * mm) / 31
        drop = (7 + (index % 5) * 2) * mm
        canvas.line(x, top, x - 3.5 * mm + (index % 3) * 2.2 * mm, top - drop)
    canvas.restoreState()


def draw_parasol(canvas, x: float, y: float, scale: float) -> None:
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(SEA_BLUE_DARK.red, SEA_BLUE_DARK.green, SEA_BLUE_DARK.blue, alpha=0.32))
    canvas.setFillColor(colors.Color(BABY_BLUE.red, BABY_BLUE.green, BABY_BLUE.blue, alpha=0.40))
    canvas.setLineWidth(0.55 * scale)
    canvas.setFillColor(colors.Color(PEARL_BLUE.red, PEARL_BLUE.green, PEARL_BLUE.blue, alpha=0.20))
    canvas.circle(x, y + 19 * mm * scale, 18 * mm * scale, stroke=0, fill=1)
    canvas.setFillColor(colors.Color(BABY_BLUE.red, BABY_BLUE.green, BABY_BLUE.blue, alpha=0.42))
    canvas.wedge(x - 20 * mm * scale, y + 9 * mm * scale, x + 20 * mm * scale, y + 29 * mm * scale, 0, 180, stroke=1, fill=1)
    for index in range(11):
        offset = -17 * mm * scale + index * 3.4 * mm * scale
        start_x = x + offset * 0.35
        end_x = x + offset
        canvas.bezier(
            start_x,
            y + 11 * mm * scale,
            start_x + 2 * mm * scale,
            y + 5 * mm * scale,
            end_x - 1.5 * mm * scale,
            y + 3 * mm * scale,
            end_x,
            y - (3 + index % 3) * mm * scale,
        )
    canvas.setStrokeColor(colors.Color(PEARL_BLUE.red, PEARL_BLUE.green, PEARL_BLUE.blue, alpha=0.55))
    canvas.setLineWidth(0.28 * scale)
    canvas.arc(x - 16 * mm * scale, y + 13 * mm * scale, x + 16 * mm * scale, y + 27 * mm * scale, 8, 164)
    canvas.restoreState()


def draw_star_glint(canvas, x: float, y: float, scale: float, color) -> None:
    canvas.saveState()
    canvas.setStrokeColor(color)
    canvas.setLineWidth(0.55 * scale)
    canvas.line(x - 2.7 * mm * scale, y, x + 2.7 * mm * scale, y)
    canvas.line(x, y - 2.7 * mm * scale, x, y + 2.7 * mm * scale)
    canvas.line(x - 1.7 * mm * scale, y - 1.7 * mm * scale, x + 1.7 * mm * scale, y + 1.7 * mm * scale)
    canvas.line(x - 1.7 * mm * scale, y + 1.7 * mm * scale, x + 1.7 * mm * scale, y - 1.7 * mm * scale)
    canvas.restoreState()


def draw_fantasy_glow(canvas, width: float, height: float, cover: bool = False) -> None:
    canvas.saveState()
    pearl = colors.Color(PEARL_BLUE.red, PEARL_BLUE.green, PEARL_BLUE.blue, alpha=0.52 if cover else 0.34)
    for index, (px, py, scale) in enumerate([
        (25, 50, 0.75),
        (52, 34, 0.55),
        (92, 44, 0.62),
        (122, 60, 0.48),
        (31, 152, 0.44),
        (118, 158, 0.50),
    ]):
        draw_star_glint(canvas, px * mm, py * mm, scale if cover else scale * 0.75, pearl)

    canvas.setFillColor(colors.Color(PEARL_BLUE.red, PEARL_BLUE.green, PEARL_BLUE.blue, alpha=0.28 if cover else 0.18))
    for index in range(8):
        x = (18 + index * 15) * mm
        y = (58 + (index % 4) * 23) * mm
        radius = (0.9 + (index % 3) * 0.45) * mm
        canvas.circle(x, y, radius, stroke=0, fill=1)
    canvas.restoreState()


def draw_agave(canvas, x: float, y: float, scale: float) -> None:
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(AGAVE_GREEN.red, AGAVE_GREEN.green, AGAVE_GREEN.blue, alpha=0.38))
    canvas.setFillColor(colors.Color(AGAVE_GREEN.red, AGAVE_GREEN.green, AGAVE_GREEN.blue, alpha=0.16))
    canvas.setLineWidth(0.75 * scale)
    for angle in [-65, -42, -22, 0, 23, 44, 66]:
        radians = math.radians(angle + 90)
        tip_x = x + math.cos(radians) * 22 * mm * scale
        tip_y = y + math.sin(radians) * 22 * mm * scale
        base_left = x + math.cos(radians + 1.7) * 4 * mm * scale
        base_right = x + math.cos(radians - 1.7) * 4 * mm * scale
        canvas.line(x, y, tip_x, tip_y)
        canvas.line(base_left, y, tip_x, tip_y)
        canvas.line(base_right, y, tip_x, tip_y)
    canvas.restoreState()


def draw_plant_ground(canvas, x: float, y: float, scale: float) -> None:
    canvas.saveState()
    canvas.setFillColor(colors.Color(DRIFTWOOD.red, DRIFTWOOD.green, DRIFTWOOD.blue, alpha=0.20))
    canvas.ellipse(x - 28 * mm * scale, y - 4 * mm * scale, x + 28 * mm * scale, y + 3 * mm * scale, fill=1, stroke=0)
    canvas.setFillColor(colors.Color(COAST_GREEN.red, COAST_GREEN.green, COAST_GREEN.blue, alpha=0.18))
    canvas.ellipse(x - 21 * mm * scale, y - 1 * mm * scale, x + 21 * mm * scale, y + 5 * mm * scale, fill=1, stroke=0)
    canvas.restoreState()


def draw_corner_cactus(canvas, x: float, y: float, scale: float, flip_x: bool = False, flip_y: bool = False) -> None:
    canvas.saveState()
    canvas.translate(x, y)
    canvas.scale(-1 if flip_x else 1, -1 if flip_y else 1)
    draw_agave(canvas, 0, 0, scale)
    canvas.restoreState()


def draw_coast_details(canvas, width: float, height: float, cover: bool = False) -> None:
    canvas.saveState()
    if cover:
        plant_x = width / 2
        plant_y = 19 * mm
        draw_agave(canvas, plant_x, plant_y, 1.02)
    else:
        draw_corner_cactus(canvas, width / 2, 11 * mm, 0.62)
    canvas.restoreState()


def draw_reference_frame(canvas, width: float, height: float, cover: bool = False) -> None:
    draw_wood_frame(canvas, width, height, cover)


def draw_background_decor(canvas, width: float, height: float, cover: bool = False) -> None:
    canvas.saveState()
    draw_reference_frame(canvas, width, height, cover)
    draw_fantasy_glow(canvas, width, height, cover)
    draw_coast_details(canvas, width, height, cover)
    canvas.restoreState()


def draw_gap(canvas, gap_left: bool) -> None:
    canvas.setFillColor(GAP_GOLD)
    x = 0 if gap_left else CATALOG_WIDTH
    canvas.rect(x, 0, CATALOG_OFFSET_X, CATALOG_HEIGHT, fill=1, stroke=0)
    canvas.saveState()
    canvas.setStrokeColor(colors.Color(DRIFTWOOD.red, DRIFTWOOD.green, DRIFTWOOD.blue, alpha=0.22))
    canvas.setLineWidth(0.45)
    for index in range(9):
        xx = x + (index + 1) * CATALOG_OFFSET_X / 10
        canvas.line(xx, 8 * mm, xx + math.sin(index) * 1.1 * mm, CATALOG_HEIGHT - 8 * mm)
    canvas.restoreState()


def cover_page(canvas, doc) -> None:
    width, height = CATALOG_WIDTH, CATALOG_HEIGHT
    canvas.saveState()
    draw_gap(canvas, gap_left=True)
    canvas.translate(CATALOG_OFFSET_X, 0)
    draw_background_decor(canvas, width, height, cover=True)
    canvas.setStrokeColor(colors.Color(0.42, 0.27, 0.17, alpha=0.24))
    canvas.setLineWidth(1.2)
    canvas.roundRect(13 * mm, 18 * mm, width - 26 * mm, height - 36 * mm, 12, stroke=1, fill=0)
    canvas.restoreState()


def content_page(canvas, doc, gap_left: bool) -> None:
    width, height = CATALOG_WIDTH, CATALOG_HEIGHT
    canvas.saveState()
    draw_gap(canvas, gap_left)
    if gap_left:
        canvas.translate(CATALOG_OFFSET_X, 0)
    draw_background_decor(canvas, width, height)
    canvas.setFont(FONT_REGULAR, 7)
    canvas.setFillColor(colors.HexColor("#8b6040"))
    canvas.drawRightString(width - 14 * mm, 7 * mm, str(doc.page))
    canvas.restoreState()


def content_page_left(canvas, doc) -> None:
    content_page(canvas, doc, gap_left=True)


def content_page_right(canvas, doc) -> None:
    content_page(canvas, doc, gap_left=False)


def product_table(product: dict[str, Any]) -> Table:
    el_title = text(product.get("title"), "el")
    en_title = text(product.get("title"), "en")
    el_desc = text(product.get("desc"), "el")
    en_desc = text(product.get("desc"), "en")
    item_price = price(product.get("price"))

    el_parts = [Paragraph(el_title, STYLE_ITEM_TITLE)]
    en_parts = [Paragraph(en_title, STYLE_ITEM_TITLE)]
    if el_desc:
        el_parts.append(Paragraph(el_desc, STYLE_ITEM_DESC))
    if en_desc:
        en_parts.append(Paragraph(en_desc, STYLE_ITEM_DESC))

    table = Table(
        [[el_parts, en_parts, Paragraph(item_price, STYLE_PRICE)]],
        colWidths=[54 * mm, 54 * mm, 15 * mm],
    )
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 6),
        ("LEFTPADDING", (1, 0), (1, 0), 6),
        ("LEFTPADDING", (2, 0), (2, 0), 3),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -1), 0.35, colors.Color(0.42, 0.27, 0.17, alpha=0.18)),
    ]))
    return table


def category_block(category: dict[str, Any]) -> KeepTogether:
    header = Table(
        [[
            Paragraph(text(category.get("title"), "el"), STYLE_CATEGORY_EL),
            Paragraph(text(category.get("title"), "en"), STYLE_CATEGORY_EN),
            "",
        ]],
        colWidths=[54 * mm, 54 * mm, 15 * mm],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, WOOD_700),
    ]))
    flowables = [header, Spacer(1, 2 * mm)]
    flowables.extend(product_table(product) for product in category.get("products", []))
    flowables.append(Spacer(1, 5 * mm))
    return KeepTogether(flowables)


def menu_section(data: dict[str, Any], is_rest: bool, include_heading: bool = False, title_el: str = "", title_en: str = "") -> list[Any]:
    flowables: list[Any] = []
    if include_heading:
        heading = Table(
            [[Paragraph(title_el, STYLE_SECTION_EL), Paragraph(title_en, STYLE_SECTION_EN)]],
            colWidths=[61.5 * mm, 61.5 * mm],
        )
        heading.setStyle(TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LINEBELOW", (0, 0), (-1, -1), 1.4, WOOD_700),
        ]))
        flowables.extend([heading, Spacer(1, 5 * mm)])
    flowables.extend(category_block(category) for category in menu_categories(data, is_rest))
    return flowables


def legend_block(data: dict[str, Any]) -> list[Any]:
    legend = next((category for category in data["categories"] if is_legend(category)), None)
    lines: list[Any] = []
    legend_products = (legend.get("products", []) if legend else [])[1:]
    if not legend_products:
        legend_products = [
            {
                "title": {
                    "el": "Σε περίπτωση αλλεργιών, παρακαλούμε ενημερώστε τον σερβιτόρο",
                    "en": "In case of allergies, please inform the waiter",
                },
                "desc": {"el": "", "en": ""},
            },
            {
                "title": {"el": "Κατεψυγμένα", "en": "Frozen"},
                "desc": {"el": "*", "en": "*"},
            },
        ]

    for product in legend_products:
        marker_el = text(product.get("desc"), "el")
        marker_en = text(product.get("desc"), "en")
        lines.append(
            Paragraph(
                f"{f'<b>{marker_el}</b> ' if marker_el else ''}{text(product.get('title'), 'el')} / "
                f"{f'<b>{marker_en}</b> ' if marker_en else ''}{text(product.get('title'), 'en')}",
                STYLE_LEGEND,
            )
        )
    lines.append(Paragraph("Οι τιμές περιλαμβάνουν ΦΠΑ / Prices include VAT", STYLE_LEGEND))
    table = Table([[lines]], colWidths=[123 * mm])
    table.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return [Spacer(1, 1 * mm), table]


def opener_page(title: str, subtitle: str) -> list[Any]:
    flowables: list[Any] = []
    if LOGO_PATH.exists():
        flowables.extend([
            Image(str(LOGO_PATH), width=88 * mm, height=31 * mm),
            Spacer(1, 13 * mm),
        ])
    flowables.extend([
        Paragraph(title, STYLE_COVER_TITLE),
        Paragraph(subtitle, STYLE_COVER_SUBTITLE),
    ])
    return flowables


def build_pdf() -> None:
    data = json.loads(DATA_PATH.read_text("utf-8"))
    doc = BaseDocTemplate(
        str(PDF_PATH),
        pagesize=PAGE_SIZE,
        leftMargin=CATALOG_OFFSET_X + 10 * mm,
        rightMargin=10 * mm,
        topMargin=9 * mm,
        bottomMargin=12 * mm,
    )
    content_width = CATALOG_WIDTH - 20 * mm
    content_frame_left = Frame(CATALOG_OFFSET_X + 10 * mm, doc.bottomMargin, content_width, doc.height, id="content-left")
    content_frame_right = Frame(10 * mm, doc.bottomMargin, content_width, doc.height, id="content-right")
    cover_frame = Frame(CATALOG_OFFSET_X + 18 * mm, 48 * mm, CATALOG_WIDTH - 36 * mm, 104 * mm, id="cover")
    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=[cover_frame], onPage=cover_page),
        PageTemplate(
            id="ContentLeft",
            frames=[content_frame_left],
            onPage=content_page_left,
        ),
        PageTemplate(
            id="ContentRight",
            frames=[content_frame_right],
            onPage=content_page_right,
        ),
    ])

    story: list[Any] = [
        *opener_page("Beach Menu", "Μενού Παραλίας"),
        NextPageTemplate(["ContentLeft", "ContentRight"]),
        PageBreak(),
    ]
    story.extend(menu_section(data, False))
    story.extend([
        NextPageTemplate("Cover"),
        PageBreak(),
        *opener_page("Restaurant Menu", "Μενού Εστιατορίου"),
        NextPageTemplate(["ContentLeft", "ContentRight"]),
        PageBreak(),
    ])
    story.extend(menu_section(data, True))
    story.extend(legend_block(data))
    doc.build(story)


if __name__ == "__main__":
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    build_pdf()
    print(PDF_PATH)
