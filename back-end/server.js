// 1. Import des librairies nécessaires
const express = require('express');
const cors = require('cors');

// 2. Initialisation de l'application Express
const app = express();
const PORT = 3001;

// 3. Middleware (Sécurité CORS)
app.use(cors());

const products = [
    {
        id: 1,
        name: "Chocolate",
        price: 4,
        description: "The black one"
    },
    {
        id: 2,
        name: "Lentils",
        price: 2.50,
        description: "Good for mood"
    },
    {
        id: 3,
        name: "Banana",
        price: 1.20,
        description: "Bomboclaat"
    }
    
];

// 5. La route GET demandée
app.get('/get-products', (req, res) => {

    res.json(products);
});

// 6. Lancement du serveur
app.listen(PORT, () => {
    console.log(`Le serveur backend tourne sur http://localhost:${PORT}`);
});