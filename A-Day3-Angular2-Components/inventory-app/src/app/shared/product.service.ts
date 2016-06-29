import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    // component state is now member variables, no more $scope
    products: Array<Product>;
    // constructors do dependency injection in Angular2
    constructor(public http: Http) {
      
    }
    
    getProducts(){
      // our http call here
      // make the call
      return this.http.get('tasks.json')
        // initial transform - result to json
        .map( (responseData) => {
          return responseData.json();
        })
        // next transform - each element in the 
        // array to a Task class instance
        .map((products: Array<any>) => {
            let result:Array<Product> = [];
            if (products) {
              products.forEach((product) => {
                result.push(new Product(product.sku, product.name));
              });
            }
          return result;
        });
    }
}
