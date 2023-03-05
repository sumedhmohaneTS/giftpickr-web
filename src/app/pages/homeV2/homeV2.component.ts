// Angular modules
import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/seo/seo.service';
import { HomeV2Service } from './homeV2.service';

@Component({
  selector: 'app-homeV2',
  templateUrl: './homeV2.component.html',
  styleUrls: ['./homeV2.component.scss']
})
export class HomeV2Component implements OnInit {

  fileNo: any = 1;
  interval: any;

  constructor(private seoService: SeoService) { }


  public ngOnInit(): void {
    this.calculateFileNo();

    this.seoService.update({
      title: 'GiftPickr - Your Personal Gift Recommendation Engine',
      description: 'Find the perfect gift for any occasion with GiftPickr.com. Our gift recommendation system makes gift-giving easy and stress-free. Start browsing today!',
      url: window.location.href,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-with-name.png'
    });
  }

  calculateFileNo() {
    this.fileNo = Math.floor(Math.random() * 5) + 1;
    this.interval = setInterval(() => {
      this.fileNo = (this.fileNo % 5) + 1;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
