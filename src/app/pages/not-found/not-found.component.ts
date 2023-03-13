// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/seo/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private seoService: SeoService) { }


  public ngOnInit(): void {
    this.seoService.update({
      title: 'Page Not Found | GiftPickr',
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-cover.png'
    });
  }

}
