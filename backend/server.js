const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/api/goals', (req, res) => {
    res.status(200).json({ message: 'Get goals' })
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
