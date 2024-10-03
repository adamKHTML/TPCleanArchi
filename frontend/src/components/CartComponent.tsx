import React, { useState, useEffect } from 'react';
import { getCartTotal } from '../services/CartService';

export const CartComponent: React.FC = () => {
    const [total, setTotal] = useState<number>(0);
    const [products, setProducts] = useState<{ name: string; price: number }[]>([]);


    useEffect(() => {
        async function fetchTotal() {
            const totalPrice = await getCartTotal();
            setTotal(totalPrice);
        }

        async function fetchProducts() {
            const response = await fetch('http://localhost:3000/cart/products');
            const data = await response.json();
            setProducts(data);
        }

        fetchTotal();
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Total du panier: {total} €</h2>
            <h3>Produits dans le panier:</h3>
            {products.length === 0 ? (
                <p>Aucun produit dans le panier.</p>
            ) : (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price} €
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
