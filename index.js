const express = require('express');
const favicon = require('express-favicon');
const path = require('path');


const port = process.env.PORT || 2003

const app = express();

app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.use(express.static('public'));



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});