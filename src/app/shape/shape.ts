import { Position } from './position';
import { Size } from './size';

export { Position, Size };

export class Shape {
  constructor(
    public position: Position,
    public size: Size
  ) {}

};
