import { Component } from '@angular/core';

import { FieldComponent } from './field';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FieldComponent]
})
export class AppComponent {
  title = 'app works!';
}
