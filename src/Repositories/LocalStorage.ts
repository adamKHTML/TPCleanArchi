import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class LocalStorage implements Storable {
    private storageKey = 'cart';


    addProduct(product: Product): void {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    }

    // Récupère tous les produits du stockage local
    getProducts(): Product[] {
        const storedProducts = localStorage.getItem(this.storageKey);
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    // Calcule le prix total des produits
    getTotal(): number {
        return this.getProducts().reduce((total, product) => total + product.price, 0);
    }


    getItems(): Product[] {
        return this.getProducts();
    }
}
