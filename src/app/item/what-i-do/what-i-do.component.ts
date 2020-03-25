import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.css']
})
export class WhatIDoComponent implements OnInit {

  @Input()
  data = {icons: [], title: 'Vanilla JavaScript', description: 'Desc'};

  constructor() {
  }

  ngOnInit() {
  }

}
