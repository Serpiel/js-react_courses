import React, { Component } from 'react';

class GuessNumber extends Component {
    constructor(props) {
    super(props);
    this.state = {
        targetNumber: null, 
        message: ''         
    };
    }

    componentDidMount() {
    this.generateRandomNumber();
    }

    generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState({ targetNumber: randomNum });
    console.log("Secret number:", randomNum);
    };

    handleInput = (e) => {
    const userGuess = parseInt(e.target.value, 10);
    const { targetNumber } = this.state;

    if (isNaN(userGuess)) {
        this.setState({ message: '' });
        return;
    }

    if (userGuess > targetNumber) {
        this.setState({ message: "le nombre est plus petit" });
    } else if (userGuess < targetNumber) {
        this.setState({ message: "le nombre est plus grand" });
    } else {
        this.setState({ message: "c'est juste" });
    }
    };

    render() {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Jeu du Nombre Mystère</h2>
            <label htmlFor="guessInput">Devinez le nombre (1-100) : </label>
            <br />
            <input 
                type="number" 
                id="guessInput" 
                onInput={this.handleInput} 
                placeholder="Entrez un nombre..."
            />
            {this.state.message}
        </div>
    );
    }
}

export default GuessNumber;