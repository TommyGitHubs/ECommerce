const express = require('express');
const { data }  = require('./data');


const PORT = process.env.PORT || 5000

const http = require('http')

const app = express();


app.get("/api/products", (req, res) =>{
    res.send(data.products);
});

const server = http.createServer(app)

server.listen(PORT, () => {console.log(`Server started at localhost:${PORT}`)});