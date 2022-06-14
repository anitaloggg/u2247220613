import { Component, ElementRef, ViewChild } from '@angular/core';
import { CheckStockComponent } from './check-stock/check-stock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("title1") h1: ElementRef | undefined;
  @ViewChild(CheckStockComponent) checkStock: CheckStockComponent | any;

  QTY: number = 12;
  Stock: number = 10;
  vDate = new Date();
  vString = "This is a book";
  vMoney = 382140;
  vNumber = 39.85;
  vNumber2 = 31.11;
  vPercent = 10;

  ngAfterViewInit() {
    console.log(this.h1?.nativeElement);
    console.log("ngAfterViewInit:", this.checkStock);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked: ", this.checkStock);
  }

  // name = "Life Cycle Hooks"
  title = 'component-lifecycle-hooks';
  // num:number=0;
  // ngOnInit() {
  //   setTimeout(() => {     
  //     this.name = (++this.num).toString();
  //     console.log(`外部改變 name : ${this.name}`);
  //   }, 3000);

  // }




}
