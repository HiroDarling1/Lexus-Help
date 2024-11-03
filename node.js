const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let comments = []; // In-memory store for comments

app.use(bodyParser.json());

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to post a new comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.status(201).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
