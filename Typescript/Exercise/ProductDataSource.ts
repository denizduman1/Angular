import { Product } from "./Product";

export class ProductDataSource{
    private products: Product[];
    
    constructor() {       
        this.products = [
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"Samsung S6","Telefon",1200),
            new Product(3,"Samsung S7","Telefon",1400)
        ]
    }
 
    getProducts(): Product[] {
        return this.products;
    }
    
}

