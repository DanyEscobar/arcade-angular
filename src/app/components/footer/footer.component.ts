import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socials: any[] = [
    {
      icon: 'fa fa-pinterest',
      link: 'home',
    },
    {
      icon: 'fa fa-linkedin',
      link: 'home',
    },
    {
      icon: 'fa fa-instagram',
      link: 'home',
    },
    {
      icon: 'fa fa-facebook',
      link: 'home',
    },
    {
      icon: 'fa fa-twitter',
      link: 'home',
    },
  ];
  menu: any[] = [
    {
      pages: [
        {
          name: 'Home',
          link: 'home',
        },
        {
          name: 'About us',
          link: 'about',
        },
        {
          name: 'Services',
          link: 'service',
        },
        {
          name: 'Portfolio',
          link: 'portfolio',
        },
        {
          name: 'Blog',
          link: 'home',
        },
      ],
    },
    {
      pages: [
        {
          name: 'Terms & Conditions',
          link: 'home',
        },
        {
          name: 'FAQ',
          link: 'home',
        },
        {
          name: 'Help Desk',
          link: 'home',
        },
        {
          name: 'Job Aplications',
          link: 'home',
        },
        {
          name: 'Site Map',
          link: 'home',
        },
      ],
    },
    {
      pages: [
        {
          name: 'Privacy',
          link: 'home',
        },
        {
          name: 'Contact us',
          link: 'contact',
        },
        {
          name: 'Newsletter',
          link: 'home',
        },
        {
          name: 'Clients Testimonials',
          link: 'home',
        },
        {
          name: 'FAQ',
          link: 'home',
        },
      ],
    },
  ];
  year: any;
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
