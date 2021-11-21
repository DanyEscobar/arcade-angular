import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  data = {
    banner: 'assets/images/bg-hero.jpeg',
    section: 'Services',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
