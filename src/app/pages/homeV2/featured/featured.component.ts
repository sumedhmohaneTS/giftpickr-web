// Angular modules
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { HomeV2Service } from '../homeV2.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { firstValueFrom, isObservable, Observable, of } from 'rxjs';

declare const Zone: any;

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit, OnDestroy {

  dataLoaded = false;
  featuredProducts: any;
  isScrollable: boolean = false;
  @ViewChild('cardList', { static: false }) cardListRef!: ElementRef;
  isAtStart: boolean = true;
  isAtEnd: boolean = false;
  scrollTimeout: any;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object,
    private state: TransferState,
    private service: HomeV2Service,
    private cdr: ChangeDetectorRef) {
  }


  ngOnInit() {
    // await this.getFeaturedProducts();
    this.waitFor(this.getFeaturedProducts())


  }

  async waitFor<T>(prom: Promise<T> | Observable<T>): Promise<T> {
    if (isObservable(prom)) {
      prom = firstValueFrom(prom);
    }
    const macroTask = Zone.current
      .scheduleMacroTask(
        `WAITFOR-${Math.random()}`,
        () => { },
        {},
        () => { }
      );
    return prom.then((p: T) => {
      macroTask.invoke();
      return p;
    });
  }

  ngAfterViewInit() {

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
    this.isScrollable = this.dataLoaded && contentWidth > containerWidth;

  }

  ngOnDestroy(): void {
    const cardList = this.cardListRef.nativeElement;
    cardList.removeEventListener('scroll', () => {
      this.checkIfAtStartOrEnd();
    });
  }

  async getFeaturedProducts(): Promise<any> {
    // const KEY_NAME = makeStateKey('getFeaturedProducts');
    // const featuredProducts = this.state.get(KEY_NAME, null as any);
    // if (featuredProducts) {
    //   this.postFetchProducts();
    //   return
    // }

    const response = await this.service.getFeaturedProducts();
    this.featuredProducts = response && response.data && response.data.data || [];
    this.featuredProducts = response.data.data.slice(0, 6);
    // this.state.set(KEY_NAME, response && response.data && response.data.data || [] as any);

    this.dataLoaded = true;
    if (isPlatformBrowser(this._platformId)) {
      setTimeout(() => this.checkScrollable(), 0);
    }

    this.checkScrollable();
  }

  postFetchProducts() {
    this.dataLoaded = true;
    if (isPlatformBrowser(this._platformId)) {
      setTimeout(() => this.checkScrollable(), 0);
    }

    this.checkScrollable();
  }

  scrollLeft(): void {
    const cardList = this.cardListRef.nativeElement as HTMLElement;
    cardList.scrollTo({
      left: cardList.scrollLeft - 1500,
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
