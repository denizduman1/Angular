"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductDataSource_1 = require("./ProductDataSource");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        var _this = this;
        this.dataSource = new ProductDataSource_1.ProductDataSource();
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (item) { return _this.products.push(item); });
    }
    ProductManager.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id == id; })[0];
    };
    ProductManager.prototype.getProducts = function () {
        return this.products;
    };
    ProductManager.prototype.saveProduct = function (product) {
        var last_id = this.products[this.products.length - 1].id;
        if (last_id != undefined) {
            product.id = last_id + 1;
        }
        else {
            product.id = 1;
        }
        this.products.push(product);
    };
    ProductManager.prototype.deleteProduct = function (product) {
        var deleteIndex = this.products.indexOf(product);
        console.log("silinecek index = ", deleteIndex);
        this.products.splice(deleteIndex, 1);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
