import React, { useEffect, useState } from 'react';
import { listProducts } from './services/ProductService';
import ProductCard from './components/ProductCard';

export default function Products() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        listProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className="mt-4">
            <div className="flex-grow w-0">
                <div>
                    {products.map((product, index) => (
                        <ul key={index} className="p-4">
                           <ProductCard product={product} />
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}