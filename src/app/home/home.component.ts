import { Component, OnInit } from '@angular/core';
import { Pallette } from '../pallette';
declare function require(name: string);
0
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  colors = require('nice-color-palettes');
  singlePallette: Pallette[] = this.colors;
  doublePallettes: Pallette[] = [];

  constructor() { }

  ngOnInit() {
  }


  // this will get an array of pallettes grouped in 2;
    getDoublePallette() {
      const size = 2;

      while (this.colors.length > 0) {
        this.doublePallettes.push(this.colors.splice(0, size));
      }

      return this.doublePallettes;
    }
  }


