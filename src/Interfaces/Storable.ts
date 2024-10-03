import { Product } from '../Entities/Product';

export interface Storable {
    addProduct(product: Product): void;
    getTotal(): number;
    getItems(): Product[];
    getProducts(): Product[];
}