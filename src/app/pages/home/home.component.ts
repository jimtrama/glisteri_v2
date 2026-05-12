import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import Menu from '../../../Utils/Menu';
import data from '../../../Utils/data';
import { runtimeConfig } from '../../../environments/runtime-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('outerContainer') outerContainerRef?: ElementRef<HTMLDivElement>;

  private loadingTimer?: ReturnType<typeof setTimeout>;
  private readonly minimumLoadingMs = 1400;
  private readonly maximumLoadingMs = 3200;
  private infoTouchStartY = 0;
  private infoTouchStartTime = 0;
  private menuToggleTouchStartX = 0;
  private menuToggleTouchStartY = 0;
  private waiterTouchStartY = 0;
  private waiterTouchStartTime = 0;

  levelOne = false;
  levelTwo = false;
  selectedCategory = 0;
  menu = new Menu('el', false);
  isEl = true;
  loading = true;
  loadingProgress = 0;
  show = true;
  waiterModalOpen = false;
  waiterSending = false;
  waiterStatusMessage = '';
  waiterStatusError = false;
  waiterSunbedNumber = '';
  askWaiterModalOpen = false;
  askWaiterSending = false;
  askWaiterStatusMessage = '';
  askWaiterStatusError = false;
  askWaiterSunbedNumber = '';
  askWaiterQuestion = '';
  waiterDragging = false;
  waiterDragOffset = 0;
  infoShow = false;
  infoAnimatingOut = false;
  infoDragging = false;
  infoDragOffset = 0;
  menuToggleSwiping = false;

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
  readonly waiterApiUrl = `${runtimeConfig.catalogBackendUrl}/api/call-waiter`;
  readonly askWaiterApiUrl = `${runtimeConfig.catalogBackendUrl}/api/ask-waiter`;

  ngOnInit(): void {
    const minimumLoading = new Promise<void>((resolve) => {
      this.loadingTimer = setTimeout(resolve, this.minimumLoadingMs);
    });
    const maximumLoading = new Promise<void>((resolve) => {
      setTimeout(resolve, this.maximumLoadingMs);
    });
    const preloadWork = this.preloadStartupAssets();

    Promise.race([
      Promise.all([minimumLoading, preloadWork]),
      maximumLoading,
    ]).then(() => {
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }
  }

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

  get nextMenuLabel(): string {
    return this.menu.isRest ? this.beachLabel : this.restaurantLabel;
  }

  get nextMenuButtonLabel(): string {
    return this.isEl
      ? `Άνοιγμα ${this.nextMenuLabel}`
      : `Open ${this.nextMenuLabel}`;
  }

  get experienceCopy(): string {
    return this.isEl
      ? 'Απολαύστε αυτη την εμπειρία σας μαζί μας.'
      : 'Enjoy this expireance with us.';
  }

  get discoverCopy(): string {
    return this.isEl ? 'Δείτε τον κατάλογο' : 'Explore the catalog';
  }

  get callWaiterLabel(): string {
    return this.isEl ? 'Κάλεσε Σερβιτόρο' : 'Call Waiter';
  }

  get waiterModalTitle(): string {
    return this.isEl ? 'Κλήση Σερβιτόρου' : 'Call Waiter';
  }

  get askWaiterModalTitle(): string {
    return this.isEl ? 'Ερώτηση σε Σερβιτόρο' : 'Ask Waiter';
  }

  get waiterModalCopy(): string {
    return this.isEl
      ? 'Στείλτε τον αριθμό ξαπλώστρας για να ειδοποιηθεί η ομάδα.'
      : 'Send the sunbed number so the team can be notified.';
  }

  get askWaiterModalCopy(): string {
    return this.isEl
      ? 'Στείλτε την ερώτησή σας μαζί με τον αριθμό ξαπλώστρας.'
      : 'Send your question with your sunbed number.';
  }

  get sunbedLabel(): string {
    return this.isEl ? 'Αριθμός Ξαπλώστρας' : 'Sunbed Number';
  }

  get sunbedPlaceholder(): string {
    return this.isEl ? 'π.χ. 12' : 'e.g. 12';
  }

  get sendWaiterLabel(): string {
    return this.isEl ? 'Αποστολή' : 'Send Request';
  }

  get questionLabel(): string {
    return this.isEl ? 'Ερώτηση' : 'Question';
  }

  get questionPlaceholder(): string {
    return this.isEl ? 'π.χ. Έχετε πετσέτες;' : 'e.g. Do you have towels?';
  }

  get sendQuestionLabel(): string {
    return this.isEl ? 'Αποστολή Ερώτησης' : 'Send Question';
  }

  private preloadStartupAssets(): Promise<void> {
    const urls = [
      this.logo,
      this.bg,
      this.elFlag,
      this.enFlag,
      this.langIcon,
      this.menuIcon,
      this.infoIcon,
      this.closeIcon,
      this.reserveIcon,
      this.sunbedIcon,
      this.fbIcon,
      this.instaIcon,
      this.googleIcon,
      ...this.getMenuAssetUrls(),
    ];
    const uniqueUrls = [...new Set(urls.filter((url): url is string => typeof url === 'string' && !!url))];
    const priorityUrls = uniqueUrls.slice(0, 36);

    if (!priorityUrls.length) {
      this.loadingProgress = 100;
      return Promise.resolve();
    }

    let completedAssets = 0;
    const updateProgress = () => {
      completedAssets += 1;
      this.loadingProgress = Math.round((completedAssets / priorityUrls.length) * 100);
    };

    return Promise.all(
      priorityUrls.map((url) => this.preloadAsset(url).then(updateProgress)),
    ).then(() => undefined);
  }

  private getMenuAssetUrls(): string[] {
    return data.categories.flatMap((category: any) => [
      category.icon,
      ...(category.products ?? []).map((product: any) => product.photo),
    ]);
  }

  private preloadAsset(url: string): Promise<void> {
    return new Promise((resolve) => {
      if (this.isVideoAsset(url)) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.muted = true;
        video.onloadedmetadata = () => resolve();
        video.onerror = () => resolve();
        video.src = url;
        return;
      }

      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => resolve();
      image.src = url;
    });
  }

  private isVideoAsset(url: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(url);
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

  openWaiterModal(): void {
    this.waiterModalOpen = true;
    this.waiterStatusMessage = '';
    this.waiterStatusError = false;
    this.waiterDragging = false;
    this.waiterDragOffset = 0;
  }

  closeWaiterModal(): void {
    this.waiterModalOpen = false;
    this.waiterSending = false;
    this.waiterStatusMessage = '';
    this.waiterStatusError = false;
    this.waiterDragging = false;
    this.waiterDragOffset = 0;
  }

  openAskWaiterModal(): void {
    this.askWaiterModalOpen = true;
    this.askWaiterStatusMessage = '';
    this.askWaiterStatusError = false;
  }

  closeAskWaiterModal(): void {
    this.askWaiterModalOpen = false;
    this.askWaiterSending = false;
    this.askWaiterStatusMessage = '';
    this.askWaiterStatusError = false;
  }

  async submitWaiterCall(): Promise<void> {
    const sunbedNumber = this.waiterSunbedNumber.trim();

    if (!sunbedNumber) {
      this.waiterStatusError = true;
      this.waiterStatusMessage = this.isEl
        ? 'Συμπληρώστε πρώτα τον αριθμό ξαπλώστρας.'
        : 'Please enter a sunbed number first.';
      return;
    }

    this.waiterSending = true;
    this.waiterStatusMessage = '';
    this.waiterStatusError = false;

    try {
      const response = await fetch(this.waiterApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sunbedNumber }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload?.message || 'Request failed');
      }

      this.waiterStatusError = false;
      this.waiterStatusMessage = payload?.message || (this.isEl
        ? 'Το αίτημα στάλθηκε επιτυχώς.'
        : 'The request was sent successfully.');
      this.waiterSunbedNumber = '';
    } catch (error) {
      this.waiterStatusError = true;
      this.waiterStatusMessage = this.isEl
        ? 'Η αποστολή απέτυχε. Ελέγξτε αν τρέχει ο server.'
        : 'Sending failed. Please check that the server is running.';
      console.error(error);
    } finally {
      this.waiterSending = false;
    }
  }

  async submitWaiterQuestion(): Promise<void> {
    const sunbedNumber = this.askWaiterSunbedNumber.trim();
    const question = this.askWaiterQuestion.trim();

    if (!sunbedNumber || !question) {
      this.askWaiterStatusError = true;
      this.askWaiterStatusMessage = this.isEl
        ? 'Συμπληρώστε αριθμό ξαπλώστρας και ερώτηση.'
        : 'Please enter both a sunbed number and a question.';
      return;
    }

    this.askWaiterSending = true;
    this.askWaiterStatusMessage = '';
    this.askWaiterStatusError = false;

    try {
      const response = await fetch(this.askWaiterApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sunbedNumber, question }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload?.message || 'Request failed');
      }

      this.askWaiterStatusError = false;
      this.askWaiterStatusMessage = payload?.message || (this.isEl
        ? 'Η ερώτηση στάλθηκε επιτυχώς.'
        : 'Your question was sent successfully.');
      this.askWaiterSunbedNumber = '';
      this.askWaiterQuestion = '';
    } catch (error) {
      this.askWaiterStatusError = true;
      this.askWaiterStatusMessage = this.isEl
        ? 'Η αποστολή απέτυχε. Ελέγξτε αν τρέχει ο server.'
        : 'Sending failed. Please check that the server is running.';
      console.error(error);
    } finally {
      this.askWaiterSending = false;
    }
  }

  onWaiterTouchStart(event: TouchEvent): void {
    if (!event.touches.length) {
      return;
    }

    this.waiterDragging = true;
    this.waiterDragOffset = 0;
    this.waiterTouchStartY = event.touches[0].clientY;
    this.waiterTouchStartTime = Date.now();
  }

  onWaiterTouchMove(event: TouchEvent): void {
    if (!this.waiterDragging || !event.touches.length) {
      return;
    }

    const deltaY = event.touches[0].clientY - this.waiterTouchStartY;

    if (deltaY <= 0) {
      this.waiterDragOffset = 0;
      return;
    }

    this.waiterDragOffset = Math.min(deltaY, 240);
  }

  onWaiterTouchEnd(): void {
    if (!this.waiterDragging) {
      return;
    }

    const elapsed = Date.now() - this.waiterTouchStartTime;
    const shouldClose = this.waiterDragOffset > 110 || (this.waiterDragOffset > 50 && elapsed < 220);

    this.waiterDragging = false;

    if (shouldClose) {
      this.closeWaiterModal();
      return;
    }

    this.waiterDragOffset = 0;
  }

  clicked(index: number): void {
    const categories = document.getElementsByClassName('categoryContainer');
    const element = categories.item(index) as HTMLElement | null;
    const outerContainer = this.outerContainerRef?.nativeElement;

    if (!element || !outerContainer) {
      return;
    }

    const containerRect = outerContainer.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const y = outerContainer.scrollTop + (elementRect.top - containerRect.top) - this.getCategoryScrollOffset() + 20;

    outerContainer.scrollTo({
      top: Math.max(0, y),
      behavior: 'auto',
    });

    this.selectedCategory = index;
  }

  getCategoryScrollOffset(): number {
    const stickyHeader = document.getElementsByClassName('mainHeaderContainer').item(0) as HTMLElement | null;
    const stickyHeaderHeight = stickyHeader?.offsetHeight ?? 0;

    return stickyHeaderHeight + 16;
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
    const scroll = target.scrollTop + this.getCategoryScrollOffset();
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

      if (!!category && this.getPos(category).y < scroll) {
        const header = document.getElementsByClassName('categoryHeaderContainer').item(i) as HTMLElement | null;
        const headerLevelTwo = document.getElementsByClassName('headerLevTwo').item(0) as HTMLElement | null;
        const x = header ? this.getPos(header).x : 0;

        headerLevelTwo?.scrollTo({
          behavior: 'auto',
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
        behavior: 'auto',
      });
    }
  }

  goToNextCatalog(): void {
    this.changed(!this.menu.isRest);
  }

  onMenuToggleTouchStart(event: TouchEvent): void {
    if (!event.touches.length) {
      return;
    }

    this.menuToggleSwiping = true;
    this.menuToggleTouchStartX = event.touches[0].clientX;
    this.menuToggleTouchStartY = event.touches[0].clientY;
  }

  onMenuToggleTouchEnd(event: TouchEvent): void {
    if (!this.menuToggleSwiping || !event.changedTouches.length) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - this.menuToggleTouchStartX;
    const deltaY = event.changedTouches[0].clientY - this.menuToggleTouchStartY;

    this.menuToggleSwiping = false;

    if (Math.abs(deltaX) < 28 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    this.changed(deltaX > 0);
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
    this.infoShow = false;
    this.infoAnimatingOut = false;
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
