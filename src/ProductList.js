import ProductPreview from "./ProductPreview";
import './ProductList.css';

function ProductList(props) {
    return (
        <div className="ProductList">
            <h2>Product List</h2>
            {props.products.map((product) => (
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