import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {document} from "ngx-bootstrap/utils";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any[] = [
    {
      name: 'Home',
      slug: '',
      selected: true,
    },
    {
      name: 'About us',
      slug: 'about',
      selected: false,
    },
    {
      name: 'Services',
      slug: 'service',
      selected: false,
    },
    {
      name: 'Portfolio',
      slug: 'portfolio',
      selected: false,
    },
    {
      name: 'Contact',
      slug: 'contact',
      selected: false,
    },
  ];
  toggle = false;
  active = '';

  constructor(public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.active = this.router.url.substring(1);
    this.getLocation(this.active)
  }

  getLocation(location: any): void {
    this.router.navigate(['' + location]);
  }

  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

}
