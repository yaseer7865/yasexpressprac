const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/q3").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});

const empSchema = mongoose.Schema({
    name : String,
    sal : Number
})

const empModel = mongoose.model("q3", empSchema);

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/add", async(req, res) => {
    const data = new empModel({
        name : req.body.name,
        sal : req.body.sal
    })
    await data.save();
    res.send("Data added");
})

app.get("/show", async(req, res) => {
    const result = await empModel.find();
    res.json(result);
})

app.listen(2002, () => {
    console.log("Server is running");
})