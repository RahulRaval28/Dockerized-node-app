// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
