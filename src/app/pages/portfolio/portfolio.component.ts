import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data = {
    banner: 'assets/images/bg-hero.jpeg',
    section: 'Portfolio',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
