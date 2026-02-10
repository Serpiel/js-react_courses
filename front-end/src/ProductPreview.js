function ProductPreview(props) {
    return (
        <div className="ProductPreview">
            <img src={props.image} alt={props.name} width="150" style={{display: "block", margin: "0 auto"}} />
            <h3>{props.name}</h3>
            <p><strong>{props.price} €</strong></p>
            <p>{props.description}</p>
        </div> 
    );
}

export default ProductPreview;