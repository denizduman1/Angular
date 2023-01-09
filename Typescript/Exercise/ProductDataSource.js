"use strict";
exports.__esModule = true;
exports.ProductDataSource = void 0;
var Product_1 = require("./Product");
var ProductDataSource = /** @class */ (function () {
    function ProductDataSource() {
        this.products = [
            new Product_1.Product(1, "Samsung S5", "Telefon", 1000),
            new Product_1.Product(2, "Samsung S6", "Telefon", 1200),
            new Product_1.Product(3, "Samsung S7", "Telefon", 1400)
        ];
    }
    ProductDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return ProductDataSource;
}());
exports.ProductDataSource = ProductDataSource;
