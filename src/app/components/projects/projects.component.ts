import {Component, OnInit} from '@angular/core';
import 'owl.carousel';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('.owl-carousel-p').owlCarousel({
        margin: 20,
        loop: true,
        nav: false,
        dots: false,
        dragged: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      }
    );
    $('.customNextBtn').click(function () {
      $('.owl-carousel-p').trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function () {
      $('.owl-carousel-p').trigger('prev.owl.carousel', [300]);
    })
  }
}
