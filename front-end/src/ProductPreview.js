import React, { Component } from 'react';

class ProductPreview extends Component {

    constructor(props) {
        super(props);
        this.state = { compteur: 0 };
    }

// React 3 : Exo 4 : Cycle de vie d'un composant - Mount, Update, Unmount (spam notifications, remove comments for tests)
/*  
    componentDidMount() {
        alert("the component was just displayed (Monté)");
    }

    componentDidUpdate() {
        alert("component was updated (Mis à jour)");
    }

    componentWillUnmount() {
        alert("component is about to be removed (Démonté)");
    }

    handleClick = () => {
        this.setState({ compteur: this.state.compteur + 1 });
    }
*/

    render() {
        return (
            <div className="ProductPreview" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <img 
                    src={this.props.image} 
                    alt={this.props.name} 
                    width="150" 
                    style={{display: "block", margin: "0 auto"}} 
                />
                <h3>{this.props.name}</h3>
                <p><strong>{this.props.price} €</strong></p>
                <p>{this.props.description}</p>
                
                <button onClick={this.handleClick}>
                    Clique-moi (Test Update) : {this.state.compteur}
                </button>
            </div> 
        );
    }
}

export default ProductPreview;