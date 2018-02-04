
const express = require('express')
const app = express()

app.get('/messsage', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    setTimeout((function() {res.send({message: `hey Hi I'm from node serve`});}), 10000);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));