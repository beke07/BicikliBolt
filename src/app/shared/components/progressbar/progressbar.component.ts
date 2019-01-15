import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.less']
})
export class ProgressbarComponent implements OnInit {
  @Input() current: number;
  @Input() max: number;

  constructor() { }

  ngOnInit() {

  }

}
