import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any[] = [
    {
      name: 'Home',
      slug: 'home',
    },
    {
      name: 'About us',
      slug: 'about',
    },
    {
      name: 'Services',
      slug: 'service',
    },
    {
      name: 'Portfolio',
      slug: 'portfolio',
    },
    {
      name: 'Contact',
      slug: 'contact',
    },
  ];
  toggle = false;

  constructor(public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

}
