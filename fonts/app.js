const express = require('express');

const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.use('/jscript', express.static(__dirname + '/scripts'));
app.use('/html',express.static(__dirname + '/views'));
app.use('/d',express.static(__dirname + '/data'));
app.use('/serve',express.static(__dirname + '/services'));

app.get('/',(req,res) =>{

    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (err) =>{
    if(err)
        console.log("not working");
});