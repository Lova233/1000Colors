import { Component, OnInit, Input } from '@angular/core';
import { Pallette } from '../pallette';

@Component({
  selector: 'app-pallette',
  templateUrl: './pallette.component.html',
  styleUrls: ['./pallette.component.scss']
})
export class PalletteComponent implements OnInit {

  @Input()singlePallette: Pallette[];


  constructor() { }

  ngOnInit() {
    console.log(this.singlePallette,"inside pallette")
  }

}
