import {Component, OnInit} from '@angular/core';
import 'owl.carousel';
declare var $: any;

@Component({
  selector: 'app-clients-slider',
  templateUrl: './clients-slider.component.html',
  styleUrls: ['./clients-slider.component.scss']
})
export class ClientsSliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.owlCarousel();
  }

  owlCarousel(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
  }
}
