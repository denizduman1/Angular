import { Product } from "./Product";
import { ProductManager } from "./ProductService";

let prdManager = new ProductManager();

console.log("1-" );

prdManager.getProducts().forEach(p => console.log(p.name));

console.log("2- 2 numaralı id'li ürün " + prdManager.getById(2).name);


prdManager.saveProduct(new Product(undefined,"iPhone 11","Telefon",2500))


console.log("3- eklendikten sonra liste ");

prdManager.getProducts().forEach(p => console.log(p.name));


prdManager.deleteProduct(prdManager.getById(1));

console.log("4- silindikten sonra liste ");

prdManager.getProducts().forEach(p => console.log(p.name));


