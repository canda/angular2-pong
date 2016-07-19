import { Input } from '@angular/core';

import { Position } from './position';
import { Size } from './size';

export class Shape {
  @Input() public position: Position;
  @Input() public size: Size;
};
