import { Component, OnInit } from '@angular/core';

import { Shape, Size, Position } from '../shape';

@Component({
  moduleId: module.id,
  selector: 'app-ball',
  templateUrl: 'ball.component.html',
  styleUrls: ['ball.component.css']
})
export class BallComponent extends Shape implements OnInit {

  ngOnInit() {
    this.size = new Size(10,10);
    this.position = new Position(100,100);
  }

}
