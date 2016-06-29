/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PriceDisplayComponent } from './price-display.component';

describe('Component: PriceDisplay', () => {
  it('should create an instance', () => {
    let component = new PriceDisplayComponent();
    expect(component).toBeTruthy();
  });
});
