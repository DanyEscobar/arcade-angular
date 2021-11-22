import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats: any[] = [
    {
      number: '14',
      text: 'Years <br>of <br>Experience',
    },
    {
      number: '237',
      text: 'Projects <br>Taken',
    },
    {
      number: '11k',
      text: 'Twitter <br>Followers',
    },
    {
      number: '12',
      text: 'Awards <br>Won',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
