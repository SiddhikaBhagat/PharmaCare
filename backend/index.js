require("dotenv").config();
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'PharmaCare API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});