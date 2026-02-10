import ProductPreview from "./ProductPreview";

function ProductList() {
    return (
        <div>
            <h2>Product List</h2>
            <ProductPreview 
                name="Orange"
                description="Long live vitamins"
            />
            <ProductPreview 
                name="Lentils"
                description="Good for the mood"
            />
            <ProductPreview 
                name="Chocolate"
                description="The black one"
            />
        </div>
    );
}

export default ProductList;