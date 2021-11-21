import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any[] = [
    {
      image: 'assets/images/dark/1.png',
      title: 'Plans and Projects',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
    {
      image: 'assets/images/dark/2.png',
      title: 'Conceptual Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
    {
      image: 'assets/images/dark/3.png',
      title: 'Apartment Buildings',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
    {
      image: 'assets/images/dark/4.png',
      title: 'Skyscrapers Buildings',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
    {
      image: 'assets/images/dark/5.png',
      title: 'Documentation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
    {
      image: 'assets/images/dark/6.png',
      title: 'Restauration Projects',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
      link: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
