import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() pallette;

  doublePallette = [];

  constructor() { }

  ngOnInit() {
    this.doublePallette = this.pallette[0].concat(this.pallette[1]);
  }

}
