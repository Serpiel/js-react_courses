import React, { Component } from 'react';

class CounterPerson extends Component {   
    constructor(props) {
        super(props);
        this.state = { compteur: 0 };
    }

    handleAdd = () => {
        if (this.state.compteur < 10) {
            this.setState((prevState) => ({
                compteur: prevState.compteur + 1
            }));
        }
    }

    handleRemove = () => {
        if (this.state.compteur > 0) {
            this.setState((prevState) => ({
                compteur: prevState.compteur - 1
            }));
        }
    }

    render() {
        return (
            <div className="CounterPerson">
                <p>Current Count: {this.state.compteur}</p>
                <button onClick={this.handleAdd}>
                    Add Person
                </button>
                <button onClick={this.handleRemove}>
                    Remove Person
                </button>
            </div>
        )
    }
}

export default CounterPerson;