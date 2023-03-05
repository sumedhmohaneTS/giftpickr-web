// Angular modules
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { HomeV2Service } from '../homeV2.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit, OnDestroy {

  featuredProducts: any;
  isScrollable: boolean = false;
  @ViewChild('cardList', { static: false }) cardListRef!: ElementRef;
  isAtStart: boolean = true;
  isAtEnd: boolean = false;
  scrollTimeout: any;

  constructor(private service: HomeV2Service,
    private cdr: ChangeDetectorRef) {
  }


  public ngOnInit(): void {
    this.getFeaturedProducts();
  }

  ngAfterViewInit() {
    const cardList = this.cardListRef.nativeElement;
    const cardContainer = cardList.parentElement;

    const containerWidth = cardContainer.offsetWidth;
    const contentWidth = cardList.scrollWidth;
    this.isScrollable = contentWidth >= containerWidth;
    cardList.addEventListener('scroll', () => {
      this.checkIfAtStartOrEnd();
    });
  }

  ngOnDestroy(): void {
    const cardList = this.cardListRef.nativeElement;
    cardList.removeEventListener('scroll', () => {
      this.checkIfAtStartOrEnd();
    });
  }

  async getFeaturedProducts() {
    const response = await this.service.getFeaturedProducts();
    this.featuredProducts = response && response.data && response.data.data || [];
    console.log(this.featuredProducts);
  }

  scrollLeft(): void {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    cardList.scrollTo({
      left: cardList.scrollLeft - 1500,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.checkIfAtStartOrEnd();
    }, 500);

  }

  scrollRight(): void {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    cardList.scroll({
      left: cardList.scrollLeft + 1500,
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
