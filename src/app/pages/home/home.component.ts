import { Component, ElementRef, ViewChild } from '@angular/core';

import Menu from '../../../Utils/Menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('outerContainer') outerContainerRef?: ElementRef<HTMLDivElement>;

  private infoTouchStartY = 0;
  private infoTouchStartTime = 0;

  levelOne = false;
  levelTwo = false;
  selectedCategory = 0;
  menu = new Menu('el', false);
  isEl = true;
  show = true;
  infoShow = false;
  infoAnimatingOut = false;
  infoDragging = false;
  infoDragOffset = 0;

  readonly bg = 'images/header/s_bg.jpg';
  readonly closeIcon = 'images/close.png';
  readonly fbIcon = 'images/facebook.png';
  readonly googleIcon = 'images/googlemaps.png';
  readonly logo = 'images/header/logo.png';
  readonly elFlag = 'images/flags/s_eflag.png';
  readonly enFlag = 'images/flags/s_gflag.png';
  readonly infoIcon = 'images/info.png';
  readonly instaIcon = 'images/instagram.png';
  readonly langIcon = 'images/icons/general/language.png';
  readonly menuIcon = 'images/icons/general/menu.png';
  readonly reserveIcon = 'images/reserve.png';
  readonly sunbedIcon = 'images/sunbed.png';
  readonly taxiIcon = 'images/taxi.png';

  get restaurantLabel(): string {
    return this.isEl ? 'Εστιατόριο' : 'Restaurant';
  }

  get beachLabel(): string {
    return this.isEl ? 'Παραλία' : 'Beach';
  }

  get closeLabel(): string {
    return this.isEl ? 'Κλείσιμο' : 'Close';
  }

  get currentMenuLabel(): string {
    return this.menu.isRest ? this.restaurantLabel : this.beachLabel;
  }

  get experienceCopy(): string {
    return this.isEl
      ? 'Απολαύστε αυτη την εμπειρία σας μαζί μας.'
      : 'Enjoy this expireance with us.';
  }

  get discoverCopy(): string {
    return this.isEl ? 'Δείτε τον κατάλογο' : 'Explore the catalog';
  }

  switchLang(value: boolean): void {
    if (value) {
      this.menu = new Menu('en', this.menu.isRest);
      this.isEl = false;
      return;
    }

    this.menu = new Menu('el', this.menu.isRest);
    this.isEl = true;
  }

  clicked(index: number): void {
    const categories = document.getElementsByClassName('categoryContainer');
    const element = categories.item(index) as HTMLElement | null;

    if (!element || !this.outerContainerRef) {
      return;
    }

    const y = this.getPos(element).y - 200;

    this.outerContainerRef.nativeElement.scrollTo({
      top: y ,
      behavior: 'smooth',
    });

    this.selectedCategory = index;
  }

  getPos(el: HTMLElement | null): { x: number; y: number } {
    let lx = 0;
    let ly = 0;
    let current = el;

    while (current) {
      lx += current.offsetLeft;
      ly += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }

    return { x: lx, y: ly };
  }

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const point1 = window.innerWidth / 2 - 80;
    const point2 = window.innerWidth / 2 + 20;
    const scroll = target.scrollTop + 200;
    const categories = document.getElementsByClassName('categoryContainer');

    this.show = false;

    if (point1 < scroll && scroll < point2) {
      this.levelOne = true;
      this.infoShow = false;
      this.infoAnimatingOut = false;
    } else {
      this.levelOne = false;
    }

    this.levelTwo = point2 < scroll;

    for (let i = categories.length - 1; i >= 0; i -= 1) {
      const category = categories.item(i) as HTMLElement | null;

      if (category && this.getPos(category).y - 200 < scroll) {
        const header = document.getElementsByClassName('categoryHeaderContainer').item(i) as HTMLElement | null;
        const headerLevelTwo = document.getElementsByClassName('headerLevTwo').item(0) as HTMLElement | null;
        const x = header ? this.getPos(header).x : 0;

        headerLevelTwo?.scrollTo({
          behavior: 'smooth',
          left: x - 50,
        });

        this.selectedCategory = i;
        break;
      }
    }
  }

  changed(checked: boolean): void {
    this.menu = new Menu(this.isEl ? 'el' : 'en', checked);
    this.selectedCategory = 0;

    const outerContainer = this.outerContainerRef?.nativeElement;

    if (outerContainer) {
      outerContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  toggleInfo(): void {
    if (this.infoShow) {
      this.closeInfo();
      return;
    }

    this.infoDragOffset = 0;
    this.infoDragging = false;
    this.infoAnimatingOut = false;
    this.infoShow = true;
  }

  closeInfo(): void {
    this.infoDragging = false;
    this.infoDragOffset = 0;
    this.infoAnimatingOut = true;

    window.setTimeout(() => {
      this.infoShow = false;
      this.infoAnimatingOut = false;
    }, 350);
  }

  onInfoTouchStart(event: TouchEvent): void {
    if (!event.touches.length || this.infoAnimatingOut) {
      return;
    }

    this.infoDragging = true;
    this.infoDragOffset = 0;
    this.infoTouchStartY = event.touches[0].clientY;
    this.infoTouchStartTime = Date.now();
  }

  onInfoTouchMove(event: TouchEvent): void {
    if (!this.infoDragging || !event.touches.length) {
      return;
    }

    const deltaY = event.touches[0].clientY - this.infoTouchStartY;

    if (deltaY <= 0) {
      this.infoDragOffset = 0;
      return;
    }

    this.infoDragOffset = Math.min(deltaY, 240);
  }

  onInfoTouchEnd(): void {
    if (!this.infoDragging) {
      return;
    }

    const elapsed = Date.now() - this.infoTouchStartTime;
    const shouldClose = this.infoDragOffset > 110 || (this.infoDragOffset > 50 && elapsed < 220);

    this.infoDragging = false;

    if (shouldClose) {
      this.closeInfo();
      return;
    }

    this.infoDragOffset = 0;
  }
}
