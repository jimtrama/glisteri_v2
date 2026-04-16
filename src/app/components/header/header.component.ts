import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() menu: any;
  @Input() selected = 0;
  @Input() isEl = true;

  @Output() categoryClick = new EventEmitter<number>();
  @Output() languageToggle = new EventEmitter<boolean>();
  @Output() menuToggle = new EventEmitter<boolean>();

  readonly logo = 'images/header/s_logo.png';
  readonly elFlag = 'images/flags/s_eflag.png';
  readonly enFlag = 'images/flags/s_gflag.png';
  readonly langIcon = 'images/icons/general/language.png';
  readonly menuIcon = 'images/icons/general/menu.png';

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
}
