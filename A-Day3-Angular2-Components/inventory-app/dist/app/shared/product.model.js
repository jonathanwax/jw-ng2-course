"use strict";
/**
 * Provides a `Product` object
 */
var Product = (function () {
    function Product(sku, name, imageUrl, department, price) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map