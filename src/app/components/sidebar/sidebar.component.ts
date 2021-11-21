import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  socialItems: any[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
