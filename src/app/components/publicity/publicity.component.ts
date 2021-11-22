import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.scss']
})
export class PublicityComponent implements OnInit {
   icons: any[] = [
     {
       icon: 'assets/images/dark/colored-1.png',
     },
     {
       icon: 'assets/images/dark/colored-2.png',
     },
     {
       icon: 'assets/images/dark/colored-3.png',
     },
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
