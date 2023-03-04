// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-homeV2',
  templateUrl: './homeV2.component.html',
  styleUrls: ['./homeV2.component.scss']
})
export class HomeV2Component implements OnInit {

  fileNo: any = 1;
  interval: any;

  constructor() { }


  public ngOnInit(): void {
    this.calculateFileNo();
  }

  calculateFileNo() {
    this.fileNo = Math.floor(Math.random() * 5) + 1;
    this.interval = setInterval(() => {
      this.fileNo = (this.fileNo % 5) + 1;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
