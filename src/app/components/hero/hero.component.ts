import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  currentIndex: any;
  totalItems: any;
  constructor() {
  }

  ngOnInit(): void {
    this.getIndex('');
    this.totalItems =  $('.slide-item').length;
    this.currentIndex = $('div.active').index() + 1;
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
