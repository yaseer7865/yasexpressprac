const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send('Hello world');
})

app.listen(2006, () => {
    console.log("Running on 2006");
})