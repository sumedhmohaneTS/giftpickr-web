// Angular modules
import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../seo/seo.service';
import { GiftFormService } from './gift-form.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent implements OnInit, OnDestroy {

  header = 'Lets pick the perfect gift!';
  age: any = 18;
  priceList: any = [
    { id: 2, min: 0, max: 1000, label: 'Under ₹1000' },
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
  relationship: any = '';
  interest: any = '';

  genders = ['Male', 'Female', 'Prefer not to say'];
  occasions = 'christmas,birthday,wedding,anniversary,graduation,valentine,mothers day,fathers day,rakhi,diwali,casual'.split(',').sort();
  relationships = 'friend,father,mother,husband,wife,child,brother,sister,boyfriend,girlfriend,nephew,niece,uncle,aunty'.split(',').sort();
  ogRelationships = [...this.relationships].sort();
  interests = 'sports,technology,travel,books,food,gaming,fashion,home,art,music,wellness,automobile'.split(',').sort();

  default = {
    interests: 'technology,travel,home,books,food,fashion,wellness'.split(','),
    occasion: 'birthday',
    relationship: 'any'
  };

  loadingProducts = false;
  products: any;
  emptyScreen = false;


  @ViewChild('slider') slider: any;
  otherProducts: any;
  productsByCategory: any = {};
  recommendedCategories: any[] = [];

  constructor(private service: GiftFormService,
    private router: Router,
    private seoService: SeoService) {

  }

  public ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    this.reset();
  }

  changeRelationship() {
    if (!this.gender || !this.gender.length) {
      this.relationships = this.ogRelationships;
    }


    if (this.gender.toLowerCase() == 'male') {
      this.relationships = 'friend,father,husband,child,brother,boyfriend,nephew,uncle'.split(',').sort()
    } else if (this.gender.toLowerCase() == 'female') {
      this.relationships = 'friend,mother,wife,child,sister,girlfriend,niece,aunty'.split(',').sort()
    }
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
      if (!this.gender || this.gender == "Prefer not to say") {
        this.gender = "any";
      }
      const data = {
        age: this.age,
        gender: this.gender.toLowerCase(),
        relationship: this.getRelation(),
        occasion: this.getOccassion(),
        interests:
          this.getInterest(),
        minPrice: this.price.min,
        maxPrice: this.price.max,
      };
      const result = await this.service.getRecommendedProducts(data);
      console.log(result);
      this.products = result.data.data.mainProducts;
      this.otherProducts = result.data.data.otherProducts;
      this.categorizeProducts();
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

  categorizeProducts() {
    this.products.forEach((product: any) => {
      const categoryName: string = product.categoryName;
      if (this.productsByCategory[categoryName] == undefined) {
        this.productsByCategory[categoryName] = [];
        this.recommendedCategories.push(categoryName);
      }
      this.productsByCategory[categoryName].push(product)
    });
    console.log(this.recommendedCategories);
    console.log(this.productsByCategory);
  }

  setHeader() {
    this.header = '';
    this.header += this.getOccassion() != 'any' ? this.getOccassion() + ' gifts' : 'Gifts';
    let gender = this.gender != 'any' ? this.gender : ''
    let relation = this.getRelation() != 'any' ? this.getRelation() + '' : ''
    this.header += relation ? ' for ' + relation : (gender != '' ? ' for ' + gender : '');
    this.header = (this.header.length > 0 && this.header) || 'Top Recommendations';
  }

  getRelation() {
    let relationship = this.relationship;
    if (this.relationship.length == 0) {
      relationship = this.default.relationship;
    }
    return relationship;
  }
  getOccassion() {
    if (this.occasion.length == 0) {
      this.occasion = this.default.occasion;
    }

    return this.occasion && this.occasion.join && this.occasion.join(',').toLowerCase() || this.occasion;
  }

  getInterest() {
    let interest: any;
    if (!this.interest || !this.interest.length) {
      interest = this.default.interests;
      if (this.gender.toLowerCase() == 'male') {
        interest = 'sports,technology,travel,books,food,gaming,fashion,home,music,wellness,automobile';
      } else if (this.gender.toLowerCase() == 'female') {
        interest = 'travel,books,food,fashion,home,music,wellness';
      }
    } else {
      interest = this.interest;
    }

    return interest && interest.join && interest.join(',').toLowerCase() || interest
  }

  setPrice(obj: { id: any; min: any; max: any; }) {
    if (this.price.id == obj.id) {
      this.price.id = 1;
      this.price.min = undefined;
      this.price.max = undefined;
      this.selectedPriceId = 1;
      return;
    }
    this.price.id = obj.id;

    this.price.min = obj.min;

    this.price.max = obj.max;
    this.selectedPriceId = this.price.id;
  }

}
