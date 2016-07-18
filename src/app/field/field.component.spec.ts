/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FieldComponent } from './field.component';

describe('Component: Field', () => {
  it('should create an instance', () => {
    let component = new FieldComponent();
    expect(component).toBeTruthy();
  });
});
