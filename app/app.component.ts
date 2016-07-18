import { Component } from '@angular/core';

import { FieldComponent } from './field/field.component'

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [FieldComponent]
})
export class AppComponent {}
