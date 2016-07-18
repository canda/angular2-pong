import { Position } from './position';
import { Size } from './size';

export { Position, Size };

export class Shape {
  constructor(public position: Point, public size: Size) {
  }

  draw(): void {
    throw('not implemented method')
  };

};
