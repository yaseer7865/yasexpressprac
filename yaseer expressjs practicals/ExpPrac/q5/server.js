const express = require('express');
const connectMongo = require('./db.js');
const router = require('./route/empRoute.js');

connectMongo();
const app = express();
app.use(express.json());
app.use("/q5", router);

app.listen(2005, () => {
    console.log(("Running"));
})