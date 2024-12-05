const express = require('express');  // Import Express
const { MongoClient } = require('mongodb');  // Import MongoClient
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Create an Express application
const app = express();
const port = process.env.PORT || 8080;  // Use environment port or default to 8080

// MongoDB URI from your original template.js
const uri = "mongodb+srv://smandira984:1234@wildfire2.6fkmw.mongodb.net/?retryWrites=true&w=majority&appName=wildfire2";

// Connect to MongoDB using the MongoDB Native Driver
const client = new MongoClient(uri);

// Connect to the database
let db;
async function connectDB() {
    try {
        // Connect to MongoDB
        await client.connect();
        db = client.db('wildfire'); // Use the correct database name
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Call connectDB function to establish connection
connectDB();

// Middleware to parse JSON data from requests
app.use(express.json());

// Sample route to check MongoDB connection
app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

// Register route to create a new user
app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if email already exists
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = {
            name,
            email,
            password: hashedPassword,
            role,
        };

        // Save the new user to MongoDB
        await db.collection('users').insertOne(newUser);
        res.status(201).json({ message: 'User registered successfully!123' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user', details: err });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});