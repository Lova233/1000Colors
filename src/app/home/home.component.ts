import { Component, OnInit } from '@angular/core';
import { Pallette } from '../pallette';
declare function require(name: string);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pallettes: Pallette[] = [];

  constructor() { }

  ngOnInit() {
    const colors = require('nice-color-palettes');

    const size = 2;

    while (colors.length > 0) {
      this.pallettes.push(colors.splice(0, size));
    }
  }

}
