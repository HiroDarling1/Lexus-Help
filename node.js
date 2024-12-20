const express = require('express');
const cors = require('cors'); // Add this if you need CORS support

const app = express();
const PORT = 3000;

let comments = []; // In-memory store for comments

app.use(cors()); // Enable CORS
app.use(express.json()); // Built-in body parser

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json({ comments, count: comments.length }); // Include count in response
});

// Endpoint to post a new comment
app.post('/comments', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid comment' });
    }
    comments.push({ text });
    res.status(201).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

