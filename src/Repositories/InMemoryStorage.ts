// Repositories/InMemoryStorage.ts
import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';


export class InMemoryStorage implements Storable {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    getItems(): Product[] {
        return this.products;
    }

    getProducts(): Product[] {
        return this.products;
    }
}