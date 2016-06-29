import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    products: Product[];
    sample: any;
  constructor(public http: Http) {
      
      this.sample = this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(response => response.json());
      
    // this.products = [
    //   new Product(
    //     'MYSHOES', 'Black Running Shoes',
    //     '/resources/images/products/black-shoes.jpg',
    //     ['Men', 'Shoes', 'Running Shoes'],
    //     109.99),
    //   new Product(
    //     'NEATOJACKET', 'Blue Jacket',
    //     '/resources/images/products/blue-jacket.jpg',
    //     ['Women', 'Apparel', 'Jackets & Vests'],
    //     238.99),
    //   new Product(
    //     'NICEHAT', 'A Nice Black Hat',
    //     '/resources/images/products/black-hat.jpg',
    //     ['Men', 'Accessories', 'Hats'],
    //     29.99)
    //   ];
  }
  
  getProducts(){
      
    //   return this.products;
    // this.sample = this.http.get('https://jsonplaceholder.typicode.com/posts')
    //     .map(response => response.json());
        // .subscribe(
        //     data => {
        //         //this.products = data;
        //         this.dummy = data;
        //         //return data;
        //     },
        //     err => console.error(err),
        //     () => console.log('Done')
        // );
  }

}
