// Angular modules
import { isPlatformBrowser, LocationStrategy } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/shared/seo/seo.service';
import { HomeV2Service } from './homeV2.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-homeV2',
  templateUrl: './homeV2.component.html',
  styleUrls: ['./homeV2.component.scss']
})
export class HomeV2Component implements OnInit {

  fileNo: any = 1;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object, private router: Router,
    private seoService: SeoService) { }


  public ngOnInit(): void {
    this.calculateFileNo();

    console.log(environment.baseUrl + this.router.url);
    this.seoService.update({
      title: 'GiftPickr - Lets pick a gift for your loved ones',
      description: 'Find the perfect gift for any occasion with GiftPickr.com. Our gift recommendation system makes gift-giving easy and stress-free. Start browsing today!',
      url: environment.baseUrl + this.router.url,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-with-name.png'
    });
  }

  calculateFileNo() {
    this.fileNo = Math.floor(Math.random() * 5) + 1;
    if (isPlatformBrowser(this._platformId)) {
      this.interval = setInterval(() => {
        this.fileNo = (this.fileNo % 5) + 1;
      }, 5000);
    }

  }

  ngOnDestroy() {
    if (isPlatformBrowser(this._platformId)) {
      clearInterval(this.interval);
    }

  }
}
