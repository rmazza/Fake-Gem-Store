const express = require('express');

const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.use('/jscript', express.static(__dirname + '/scripts'));

app.get('/',(req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/testIndex.html");
});

app.listen(3000, (err) =>{
    if(err)
        console.log("not working");
});