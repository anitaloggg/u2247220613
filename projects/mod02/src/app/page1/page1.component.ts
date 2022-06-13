import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {
  Friends=["Jenny", "Vivid", "Kity","Linda"];
  picture = new Picture(1, 
    "https://www.uuu.com.tw/Public/content/edm/180921_brochure/img/Brochure201811_title.svg",
     "索取課程手冊", "UCOM")
  constructor() { }

  ngOnInit(): void {
  }
  getVal(){
		return 10;
	}
}
