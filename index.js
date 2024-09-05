const express = require('express');
const path= require('path');
const app= express();
const PORT= 5000;

const rjay = require('./routes/about_us.js');
const balinton = require('./routes/info.js');


app.use(express.static (path.join(__dirname, 'html')));
app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.use('/about_us', rjay);
app.use('/info', balinton);

app.listen(PORT,() =>{
    console.log( `Server running on port ${PORT}`);

});