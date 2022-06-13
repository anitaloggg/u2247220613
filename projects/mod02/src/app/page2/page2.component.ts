import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'p2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pictures = [new Picture(1, 
    "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg"
    , "2018 Dr.萊爾的神奇百科", "rainbowkids"), 
    new Picture(2, 
    "http://www.rainbowkids.org.tw/WordPress/wp-content/uploads/%E6%9C%80%E5%A5%BD%E7%9A%84%E5%B8%AB%E5%82%85-s.jpg"
    , "2017最好的師傅", "rainbowkids"), 
    new Picture(3, 
    "https://upload.wikimedia.org/wikipedia/zh/thumb/b/bc/Secret_Superstar_Poster.jpg/220px-Secret_Superstar_Poster.jpg"
    , "隱藏的大明星", "印度歌舞劇情片")]
    
}
