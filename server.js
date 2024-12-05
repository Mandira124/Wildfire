const express = require('express');  // Import Express
const { MongoClient } = require('mongodb');  // Import MongoClient

// Create an Express application
const app = express();
const port = process.env.PORT || 8080;  // Use environment port or default to 5000

// MongoDB URI from your original template.js
const uri = "mongodb+srv://smandira984:1234@wildfire2.6fkmw.mongodb.net/?retryWrites=true&w=majority&appName=wildfire2";

// Connect to MongoDB using the MongoDB Native Driver
const client = new MongoClient(uri);

async function connectDB() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectDB();

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
