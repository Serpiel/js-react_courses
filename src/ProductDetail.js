function ProductDetail(props) {
    return (
        <div className="ProductDetail">
            <h2>{props.name}</h2>
            <p>price : {props.price}</p>
            <p>description : {props.description}</p>
            <p>quantity : {props.quantity}</p>
        </div>
    );
}
export default ProductDetail;