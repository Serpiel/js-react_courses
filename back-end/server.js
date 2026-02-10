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
        description: "The black one",
        image: "https://static.vecteezy.com/system/resources/previews/019/040/585/non_2x/an-8-bit-retro-styled-pixel-art-illustration-of-chocolate-free-png.png"
    },
    {
        id: 2,
        name: "Lentils",
        price: 2.50,
        description: "Good for mood",
        image: "https://static.vecteezy.com/system/resources/thumbnails/068/244/826/small/vibrant-yellow-rice-pile-on-plate-png.png"
    },
    {
        id: 3,
        name: "Banana",
        price: 1.20,
        description: "Bomboclaat",
        image: "https://static.vecteezy.com/system/resources/thumbnails/056/489/289/small_2x/pixel-art-banana-illustration-a-playful-rendition-of-the-classic-yellow-fruit-png.png"
    },
    {
        id: 4,
        name: "Orange",
        price: 1.50,
        description: "Fantanyl",
        image:"https://i.redd.it/pnxs5ftn8id91.png"
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