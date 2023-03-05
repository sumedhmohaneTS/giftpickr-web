// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HomeV2Service } from '../homeV2.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  featuredProducts: any;

  constructor(private service: HomeV2Service) {
  }

  public ngOnInit(): void {
    this.getFeaturedProducts();
  }

  async getFeaturedProducts() {
    const response = await this.service.getFeaturedProducts();
    this.featuredProducts = response && response.data && response.data.data || [];
    console.log(this.featuredProducts);
  }

}
