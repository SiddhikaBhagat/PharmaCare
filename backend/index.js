require("dotenv").config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();



connectDB();

const app = express();

// Middleware

app.use(cors({
    origin: [
        'http://localhost:5173',
        // 'https://pharma-care-pcc8.vercel.app', // Your known main domain
        '*' // Allows all Vercel preview domains and other origins
    ],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'PharmaCare API is running' });
});

// Error Handler (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});