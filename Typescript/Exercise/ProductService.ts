import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { ProductDataSource } from "./ProductDataSource";

export class ProductManager implements IProductService {
    
    private dataSource: ProductDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new ProductDataSource();
        this.products = new Array<Product>;
        this.dataSource.getProducts().forEach(item => this.products.push(item));
    }

    getById(id: number): Product {
        return this.products.filter(p => p.id == id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        let last_id = this.products[this.products.length - 1].id;
        if(last_id != undefined){
            product.id = last_id + 1;
        }
        else{
            product.id = 1;
        }
        this.products.push(product);
    }
    deleteProduct(product: Product): void {
        let deleteIndex = this.products.indexOf(product);
        console.log("silinecek index = ", deleteIndex);
        this.products.splice(deleteIndex,1);
    }

}