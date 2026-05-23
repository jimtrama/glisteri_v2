import { Component, EventEmitter, Input, Output } from '@angular/core';
import Menu from '../../../Utils/Menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private toggleTouchStartX = 0;
  private toggleTouchStartY = 0;

  @Input() menu: Menu;
  @Input() selected = 0;
  @Input() isEl = true;

  @Output() categoryClick = new EventEmitter<number>();
  @Output() languageToggle = new EventEmitter<boolean>();
  @Output() menuToggle = new EventEmitter<boolean>();
  @Output() waiterClick = new EventEmitter<void>();
  @Output() askWaiterClick = new EventEmitter<void>();

  readonly logo = 'images/header/s_logo.png';
  readonly elFlag = 'images/flags/s_eflag.png';
  readonly enFlag = 'images/flags/s_gflag.png';
  readonly langIcon = 'images/icons/general/language.png';
  readonly menuIcon = 'images/icons/general/menu.png';
  readonly sunbedIcon = 'images/sunbed.png';

  get callWaiterLabel(): string {
    return this.isEl ? 'Κάλεσε Σερβιτόρο' : 'Call Waiter';
  }

  get askWaiterLabel(): string {
    return this.isEl ? 'Ρώτα Σερβιτόρο' : 'Ask Waiter';
  }

  get headerTitle(): string {
    return this.isEl ? (this.menu.isRest ? 'Εστιατόριο' : 'Παραλία') : (this.menu.isRest ? 'Restaurant' : 'Beach');
  }

  onToggleTouchStart(event: TouchEvent): void {
    if (!event.touches.length) {
      return;
    }

    this.toggleTouchStartX = event.touches[0].clientX;
    this.toggleTouchStartY = event.touches[0].clientY;
  }

  onToggleTouchEnd(event: TouchEvent): void {
    if (!event.changedTouches.length) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - this.toggleTouchStartX;
    const deltaY = event.changedTouches[0].clientY - this.toggleTouchStartY;

    if (Math.abs(deltaX) < 28 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    this.menuToggle.emit(deltaX > 0);
  }

  onCategoryClick(index: number): void {
    this.categoryClick.emit(index);
  }

  onLanguageToggle(): void {
    this.languageToggle.emit(this.isEl);
  }

  onMenuToggle(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.menuToggle.emit(checked);
  }

  onWaiterClick(): void {
    this.waiterClick.emit();
  }

  onAskWaiterClick(): void {
    this.askWaiterClick.emit();
  }
}
