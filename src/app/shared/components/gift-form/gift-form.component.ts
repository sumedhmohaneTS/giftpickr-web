// Angular modules
import { Component, Input, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { SeoService } from '../../seo/seo.service';
import { GiftFormService } from './gift-form.service';

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent implements OnInit {

  header = 'Lets pick the perfect gift!';
  age = 18;
  gender = 'any';
  occasion: any = 'any'
  relationship: any = 'any';
  interest: any = 'any';

  genders = ['Male', 'Female', 'Prefer not to say'];
  occasions = 'christmas,birthday,wedding,anniversary,graduation,valentine,mothers day,fathers day,rakhi,diwali'.split(',').sort();
  relationships = 'friend,father,mother,husband,wife,child,brother,sister,boyfriend,girlfriend'.split(',').sort();
  interests = 'sports,technology,travel,books,food,gaming,fashion,home,art,music,wellness,automobile'.split(',').sort();

  loadingProducts = false;
  products: any;
  @ViewChild('slider') slider: any;

  constructor(private service: GiftFormService,
    private seoService: SeoService) {

  }

  public ngOnInit(): void {
    this.seoService.update({
      title: 'GiftPickr - Lets pick the perfect gift!',
      description: 'Find the perfect gift for any occasion with GiftPickr.com. Our gift recommendation system makes gift-giving easy and stress-free. Start browsing today!',
      url: window.location.href,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-with-name.png'
    });
  }

  change() {
    console.log(this.slider.value);
    if (this.age == 0 || this.age == 18) {
      this.slider.value = 18;
    }
  }

  reset() {
    this.products = undefined;
    this.header = 'Lets pick the perfect gift!';
  }

  async submit() {

    try {
      this.loadingProducts = true;
      if (this.gender == "Prefer not to say") {
        this.gender = "any";
      }
      const data = {
        age: this.age,
        gender: this.gender.toLowerCase(),
        relationship: this.getRelation(),
        occasion: this.getOccassion(),
        interests:
          this.interest && this.interest.join && this.interest.join(',').toLowerCase() || 'any'
      };
      const result = await this.service.getRecommendedProducts(data);
      console.log(result);
      this.products = result.data.data;

      this.setHeader();
    } catch (error) {
      console.error(error);
    }
    this.loadingProducts = false;
  }

  setHeader() {
    this.header = '';
    this.header += this.getOccassion() != 'any' ? this.getOccassion() + ' gifts for ' : '';
    this.header += this.getRelation() != 'any' ? this.getRelation() + '' : '';
    this.header = (this.header.length > 0 && this.header) || 'Top Recommendations';
  }

  getRelation() {
    return this.relationship && this.relationship.join && this.relationship.join(',').toLowerCase() || this.relationship;
  }
  getOccassion() {
    return this.occasion && this.occasion.join && this.occasion.join(',').toLowerCase() || this.occasion;
  }

}
