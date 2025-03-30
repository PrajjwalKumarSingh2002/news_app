// require('dotenv').config();
// const express = require("express");
// // const fetch = require("node-fetch");
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/getNews", async (req, res) => {
//     const { q, pageSize, page } = req.query;
//     const API_KEY = process.env.NEWS_API_KEY;
//     const apiUrl = `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     res.json(data);
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import cors middleware
// const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware to allow requests from any origin
app.use(cors());

app.get("/", async(req, res) => {
    res.send("welcome to home page");
})

app.get('/getNews', async (req, res) => {
    try {
        const apiKey = process.env.NEWS_API_KEY;
        const { q, pageSize, page } = req.query;
        
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
