// server.js
const express = require('express');
const app = express();
const port = 3000;

const mockDatabase = [
    { id: 1, title: 'Sample Result 1' },
    { id: 2, title: 'Sample Result 2' },
    // Add more mock data or connect to a real database
];

app.use(express.static('public'));

app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = mockDatabase.filter(item => item.title.toLowerCase().includes(query));
    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
