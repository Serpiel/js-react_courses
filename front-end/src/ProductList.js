import React, { useState, useEffect } from 'react';
import ProductPreview from "./ProductPreview";
import './ProductList.css';

function ProductList() { 

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/get-products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Erreur fetch:", err));
    }, []);

    return (
        <div className="ProductList">
            <h2>Product List</h2>
            {}
            {products.map((product) => (
                <ProductPreview
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
}

export default ProductList;