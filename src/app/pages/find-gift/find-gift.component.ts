// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/seo/seo.service';

@Component({
  selector: 'app-find-gift',
  templateUrl: './find-gift.component.html',
  styleUrls: ['./find-gift.component.scss']
})
export class FindGiftComponent implements OnInit {

  constructor
    (private seoService: SeoService
    ) { }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit(): void {
    this.seoService.update({
      title: 'Finding the Perfect gift for you',
      description: `Let our AI-powered gift recommendations take the hassle out of picking gifts, and help you find the perfect gift that will bring a smile to your loved one's face.`,
      url: window.location.href,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-with-name.png'
    });
  }

}
