// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {

  constructor
    (
      private router: Router,
    ) {

  }

  public ngOnInit(): void {

  }


  public async onClickLogout(): Promise<void> {
    // NOTE Redirect to login
    this.router.navigate(['/auth/login']);
  }


}
