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
  age: any = 18;
  priceList: any = [
    { id: 2, min: 0, max: 1000, label: 'Under 1000' },
    { id: 3, min: 1000, max: 5000, label: '₹1000 - ₹5000' },
    { id: 4, min: 5000, max: 10000, label: '₹5000 - ₹10000' },
    { id: 5, min: 10000, max: 20000, label: '₹10000 - ₹20000' },
    { id: 6, min: 20000, max: 200000, label: 'Over ₹20000' },
  ];
  ogPriceObj: any = { id: 1, min: undefined, max: undefined };
  price: any = this.ogPriceObj;
  selectedPriceId = this.price.id;

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
  emptyScreen = false;


  @ViewChild('slider') slider: any;
  otherProducts: any;


  constructor(private service: GiftFormService,
    private seoService: SeoService) {

  }

  public ngOnInit(): void {
    console.log('init');
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
    this.otherProducts = undefined;
    this.header = 'Lets pick the perfect gift!';
    this.emptyScreen = false
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
          this.interest && this.interest.join && this.interest.join(',').toLowerCase() || 'any',
        minPrice: this.price.min,
        maxPrice: this.price.max,
      };
      const result = await this.service.getRecommendedProducts(data);
      console.log(result);
      this.products = result.data.data.mainProducts;
      this.otherProducts = result.data.data.otherProducts;
      if (!this.products && !this.otherProducts) {
        this.emptyScreen = true;
        this.header = 'No results found'
        this.loadingProducts = false;
        return;
      }
      this.setHeader();
    } catch (error) {
      console.error(error);
    }
    this.loadingProducts = false;
  }

  setHeader() {
    this.header = '';
    this.header += this.getOccassion() != 'any' ? this.getOccassion() + ' gifts for ' : 'Gifts for ';
    this.header += this.getRelation() != 'any' ? this.getRelation() + '' : '';
    this.header = (this.header.length > 0 && this.header) || 'Top Recommendations';
  }

  getRelation() {
    return this.relationship && this.relationship.join && this.relationship.join(',').toLowerCase() || this.relationship;
  }
  getOccassion() {
    return this.occasion && this.occasion.join && this.occasion.join(',').toLowerCase() || this.occasion;
  }

  setPrice(obj: { id: any; min: any; max: any; }) {
    this.price.id = obj.id;

    this.price.min = obj.min;

    this.price.max = obj.max;
    this.selectedPriceId = this.price.id;
  }

}
