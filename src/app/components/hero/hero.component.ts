import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  slides: any[] = [
    {
      id: 1,
      backgroundImage: 'assets/images/bg-hero.jpeg',
      title: 'Minimalistic <br>Architecture <br> and more',
      seeProject: 'See Project',
      link: '',
    },
    {
      id: 2,
      backgroundImage: 'assets/images/bg-hero.jpeg',
      title: 'Minimalistic <br>Architecture <br> and more',
      seeProject: 'See Project',
      link: '',
    },
    {
      id: 3,
      backgroundImage: 'assets/images/bg-hero.jpeg',
      title: 'Minimalistic <br>Architecture <br> and more',
      seeProject: 'See ',
      link: '',
    },
  ];
  currentIndex = 1;
  totalItems: any;
  constructor() {
  }

  ngOnInit(): void {
    this.getIndex('');
    this.totalItems =  this.slides.length;
  }


  getIndex(value: string): void {
    let totalItems = $('.slide-item').length;
    let currentIndex = $('div.active').index() + 2;
    if (currentIndex > totalItems && value === 'next') {
      currentIndex = $('div.active').index() + 2 ;
    } else if( value === 'prev' ) {
      currentIndex = $('div.active').index();
    }
    this.currentIndex = currentIndex;
    this.totalItems = totalItems;
  }
}
