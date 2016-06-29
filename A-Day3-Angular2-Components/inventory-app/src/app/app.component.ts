import { Component } from '@angular/core';
//import  {SampleComponent} from './sample/sample.component'
import { ProductListComponent } from './product-list/product-list.component'
import { Product } from './shared/product.model';

// class Product{
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }
// }

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ProductListComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
  
}
