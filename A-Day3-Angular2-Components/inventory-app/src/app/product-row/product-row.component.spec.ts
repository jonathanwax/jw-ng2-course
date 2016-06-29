/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductRowComponent } from './product-row.component';

describe('Component: ProductRow', () => {
  it('should create an instance', () => {
    let component = new ProductRowComponent();
    expect(component).toBeTruthy();
  });
});
