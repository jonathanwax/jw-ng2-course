/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductImageComponent } from './product-image.component';

describe('Component: ProductImage', () => {
  it('should create an instance', () => {
    let component = new ProductImageComponent();
    expect(component).toBeTruthy();
  });
});
