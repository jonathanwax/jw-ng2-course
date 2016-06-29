"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_row_component_1 = require('../product-row/product-row.component');
// class Product{
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }
// }
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.onProductSelected = new core_1.EventEmitter();
    }
    ProductListComponent.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductListComponent.prototype, "productList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductListComponent.prototype, "onProductSelected", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-product-list',
            //inputs: ['productList'],
            directives: [product_row_component_1.ProductRowComponent],
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map