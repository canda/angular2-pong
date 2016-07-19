/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Size} from './size';

describe('Size', () => {
  it('should create an instance', () => {
    expect(new Size(1,2)).toBeTruthy();
  });
});
