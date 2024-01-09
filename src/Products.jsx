import React, { useEffect, useState } from 'react';
import { listProducts } from './services/ProductService';

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
                            <li>
                                <img className='w-full' src='{product.image}' alt={product.title} />
                            </li>
                            <li className="mt-2 px-2 text-lg justify-between items-center">
                                <h3 className="truncate text-lg">{product.title}</h3>
                                <p className="text-xl font-bold">{`${product.price.toLocaleString()}원`}</p>
                            </li>
                            <li className="mb-2 px-2 text-gray-600">{product.category} / {product.gender}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
