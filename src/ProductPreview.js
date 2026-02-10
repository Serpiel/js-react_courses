function ProductPreview(props) {
    return (
        <div className="ProductPreview">
            <h3>{props.name}</h3>
            <p><strong>{props.price} €</strong></p>
            <p>{props.description}</p>
        </div> 
    );
}

export default ProductPreview;