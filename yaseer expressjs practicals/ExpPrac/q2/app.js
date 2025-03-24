const express = require('express');
const app = express();

app.get("/home", (req,res) => {
    res.send("Home page");
})

app.get("/about", (req,res) => {
    res.send("About us page")
})

app.listen(2001, () => {
    console.log("Server is running");
})