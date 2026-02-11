import React, { useState, useEffect } from 'react';
import '../../styles/Magasin.css';

function Shop() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date()); 
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    const isOpen = hour >= 9 && hour < 18;
    return (
        <div className="shop-infos">
            <h1>Welcome to our Shop!</h1>
            <div className="clock">
                <p>Current hour: {hour}h{minute}:{second}</p>
            </div>
            <p>{isOpen ? "We are open!" : "Sorry, we are closed."}</p>
        </div>
    );
}

export default Shop;