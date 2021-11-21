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
  }

  getLocation(location: any): void {
    console.log(this.router.url.substring(1));
    const element = document.getElementById(location)
    if (element === null) {
      this.active = '';
      this.router.navigate(['']);
    } else {
      this.active = location;
      this.router.navigate(['' + location]);
      element.classList.add('active')
    }

  }

  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

}
