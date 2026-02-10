function ProductReview(props) {
    return (
        <div className="ProductReview">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div> 
    );
}

export default ProductReview;