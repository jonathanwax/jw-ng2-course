import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-price-display',
  inputs: ['price'],
  templateUrl: 'price-display.component.html',
  styleUrls: ['price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  price: number;
  constructor() {}

  ngOnInit() {
  }

}
