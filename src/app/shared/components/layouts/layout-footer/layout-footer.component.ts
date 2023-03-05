// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {
  public appName: string = environment.appName;

  constructor
    (
      private router: Router,
    ) {

  }

  public ngOnInit(): void {

  }



}
