import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data = {
    banner: 'assets/images/header-bg-2.jpg',
    section: 'Contact',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
