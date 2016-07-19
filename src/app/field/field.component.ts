import { Component, OnInit } from '@angular/core';

import { BallComponent } from '../ball';

@Component({
  moduleId: module.id,
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css'],
  directives: [BallComponent]
})
export class FieldComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
