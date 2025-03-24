const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.end("response");
})

app.listen(2000, () => {
    console.log("Server is running");
})