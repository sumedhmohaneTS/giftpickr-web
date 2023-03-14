// Angular modules
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productData: any;

  math = Math;

  constructor() {

  }

  public ngOnInit(): void {
    this.process();

  }

  process() {
    this.productData.imageUrls = this.productData.image_url && this.productData.image_url.split('||') || [];
  }
}
