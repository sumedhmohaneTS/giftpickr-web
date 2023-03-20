// Angular modules
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rows',
  templateUrl: './product-rows.component.html',
  styleUrls: ['./product-rows.component.scss']
})
export class ProductRowsComponent implements OnInit {

  @Input() title = '';
  @Input() scrollable = true;

  _products: any = [];
  get products(): any {
    return this._products;
  }
  @Input() set products(value: any) {
    this._products = value;
    this.ngAfterViewInit();
  }

  isScrollable: boolean = false;
  @ViewChild('cardList', { static: false }) cardListRef!: ElementRef;
  isAtStart: boolean = true;
  isAtEnd: boolean = false;
  scrollTimeout: any;


  constructor(@Inject(PLATFORM_ID) private _platformId: Object,
    private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

  }


  ngAfterViewInit() {

    if (!this.cardListRef) {
      return;
    }
    this.checkScrollable();
    const cardList = this.cardListRef.nativeElement;
    if (isPlatformBrowser(this._platformId)) {
      cardList.addEventListener('scroll', () => {
        this.checkIfAtStartOrEnd();
      });
    }

  }

  private checkScrollable() {
    if (isPlatformServer(this._platformId)) {
      return;
    }
    const cardList = this.cardListRef.nativeElement;
    const cardContainer = cardList.parentElement;

    const containerWidth = cardContainer.offsetWidth;
    const contentWidth = cardList.scrollWidth;
    this.isScrollable = this.products && contentWidth > containerWidth;
    console.log('isScrollable' + this.isScrollable);
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }


  scrollLeft(): void {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    cardList.scrollTo({
      left: cardList.scrollLeft - 500,
      behavior: 'smooth'
    });

    if (isPlatformBrowser(this._platformId)) {
      setTimeout(() => {
        this.checkIfAtStartOrEnd();
      }, 0);
    }


  }

  scrollRight(): void {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    cardList.scroll({
      left: cardList.scrollLeft + 500,
      behavior: 'smooth'
    });

    this.checkIfAtStartOrEnd();
  }


  checkIfAtStartOrEnd() {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    const scrollLeft = cardList.scrollLeft;
    const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

    this.isAtStart = scrollLeft === 0;
    this.isAtEnd = scrollLeft === maxScrollLeft;
    this.cdr.detectChanges();
  }
}
