import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.less']
})
export class BaseComponentComponent implements OnInit {
  title="Angular Fundamental Examples"
  constructor() { }

  ngOnInit() {
  }

}
