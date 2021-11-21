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
  constructor() { }

  ngOnInit(): void {
  }

}
