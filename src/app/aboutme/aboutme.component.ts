import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  desc = 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.';

  listData: { icons: string [], title: string, description: string }[] = [
    {icons: ['suitcase'], title: 'Vanilla JavaScript', description: this.desc},
    {icons: ['suitcase'], title: 'Angular, React & Vue', description: this.desc},
    {icons: ['suitcase'], title: 'Node.js', description: this.desc},
    {icons: ['suitcase'], title: 'Python & Django', description: this.desc},
    {icons: ['suitcase'], title: 'PHP', description: this.desc},
    {icons: ['suitcase'], title: 'npm, Gulp & Grunt', description: this.desc},
    {icons: ['suitcase'], title: 'HTML & CSS\n', description: this.desc},
    {icons: ['suitcase'], title: 'Sass & LESS\n', description: this.desc},
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
