import { Component } from '@angular/core';
//import  {SampleComponent} from './sample/sample.component'
import { ProductListComponent } from './product-list/product-list.component'
import { Product } from './shared/product.model';
import { ProductService } from './shared/product.service';

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
  providers: [ProductService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  products: Array<Product> = [];
  // sample: any;

  constructor(productService: ProductService) {
    
    // now it's a simple subscription to the observable
    productService.getProducts()
      .subscribe(res => this.products = res);
    
    // productService.sample
    //   .subscribe(
    //     result => this.sample = result,
    //     error => console.error(error),
    //     () => console.log("Done")
    //   );
    
    // productService.getProducts();
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
  
}
