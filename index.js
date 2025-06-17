const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint for string processing
app.post('/process', (req, res) => {
    try {
        // Check if data exists in request body
        if (!req.body.data) {
            return res.status(400).json({ error: 'Missing data field in request body' });
        }

        // Get the string from request body
        const inputString = req.body.data;

        // Convert string to array of characters
        const charArray = inputString.split('');

        // Sort the array alphabetically
        const sortedArray = charArray.sort();

        // Return the sorted array as JSON
        res.json({ word: sortedArray });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ status: 'API is running' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 