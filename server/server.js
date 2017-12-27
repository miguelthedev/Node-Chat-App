const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public/');

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(PORT, () => {
    console.log(`App is online on port ${PORT}`);
});