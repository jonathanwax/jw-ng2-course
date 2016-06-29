import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductDepartmentComponent } from '../product-department/product-department.component';
import { PriceDisplayComponent } from '../price-display/price-display.component';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  moduleId: module.id,
  selector: 'app-product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  directives: [ProductImageComponent, ProductDepartmentComponent, PriceDisplayComponent],
  templateUrl: 'product-row.component.html',
  styleUrls: ['product-row.component.css']
})
export class ProductRowComponent {
  product: Product;
}
