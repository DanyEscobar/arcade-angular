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
      link: '',
    },
    {
      icon: 'fa fa-linkedin',
      link: '',
    },
    {
      icon: 'fa fa-instagram',
      link: '',
    },
    {
      icon: 'fa fa-facebook',
      link: '',
    },
    {
      icon: 'fa fa-twitter',
      link: '',
    },
  ];
  menu: any[] = [
    {
      pages: [
        {
          name: 'Home',
          link: '',
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
          link: '',
        },
      ],
    },
    {
      pages: [
        {
          name: 'Terms & Conditions',
          link: '',
        },
        {
          name: 'FAQ',
          link: '',
        },
        {
          name: 'Help Desk',
          link: '',
        },
        {
          name: 'Job Aplications',
          link: '',
        },
        {
          name: 'Site Map',
          link: '',
        },
      ],
    },
    {
      pages: [
        {
          name: 'Privacy',
          link: '',
        },
        {
          name: 'Contact us',
          link: 'contact',
        },
        {
          name: 'Newsletter',
          link: '',
        },
        {
          name: 'Clients Testimonials',
          link: '',
        },
        {
          name: 'FAQ',
          link: '',
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
