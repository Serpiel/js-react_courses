import React, { Component } from 'react';

class ProductPreview extends Component {

    constructor(props) {
        super(props);
    console.log("constructor check")
    }

    render() {
        return (
            <div className="ProductPreview">
                <img 
                    src={this.props.image} 
                    alt={this.props.name} 
                    width="150" 
                    style={{display: "block", margin: "0 auto"}} 
                />
                <h3>{this.props.name}</h3>
                <p><strong>{this.props.price} €</strong></p>
                <p>{this.props.description}</p>
            </div> 
        );
    }
}

export default ProductPreview;