require("dotenv").config();
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();


connectDB();

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'PharmaCare API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});