// Angular modules
import { Component, Input, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent implements OnInit {

  header = 'Lets pick the perfect gift!';
  age = 18;
  gender = 'any';
  occasion = 'any'
  relationship = 'any';
  interest = 'any';

  genders = ['Male', 'Female', 'Prefer not to say'];
  occasions = 'christmas,holi,birthday,wedding,anniversary,graduation,valentine,mothersday,fathersday,rakhi,diwali'.split(',').sort();
  relationships = 'friend,father,mother,spouse,child,brother,sister,relative'.split(',').sort();
  interests = 'sports,technology,travel,books,food,gaming,fashion,home,art,music,wellness,automotive'.split(',').sort();

  loadingProducts = false;
  products = [];
  @ViewChild('slider') slider: any;

  constructor() {

  }

  public ngOnInit(): void {

  }

  change() {
    console.log(this.slider.value);
    if (this.age == 0 || this.age == 18) {
      this.slider.value = 18;
    }
  }

  submit() {
    console.log(this.age, this.gender, this.relationship, this.occasion, this.interest);
    this.loadingProducts = true;
    setTimeout(() => {
      this.loadingProducts = false;
    }, 50000);
  }

}
