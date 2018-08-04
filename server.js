const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '/');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

app.get("/next", (req,res) =>{
    res.sendFile(__dirname + '/next.html');
})




server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

