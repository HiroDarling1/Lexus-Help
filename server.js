const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

let comments = []; // In-memory store for comments
let nextId = 1; // To assign unique IDs to comments

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json({ comments, count: comments.length });
});

// Endpoint to post a new comment
app.post('/comments', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid comment' });
    }
    const newComment = { id: nextId++, text, createdAt: new Date() };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
