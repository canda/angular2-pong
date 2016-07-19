/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BallComponent } from './ball.component';

describe('Component: Ball', () => {
  it('should create an instance', () => {
    let component = new BallComponent();
    expect(component).toBeTruthy();
  });
});
