const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/q4") .then((result) => {
}).catch((err) => {
    console.log(err);
});

const q4Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    sal : {
        type : Number,
        required : true
    }
})
const q4Model = mongoose.model("q4", q4Schema);

app.post("/q4/add", async(req, res) => {
    const data = new q4Model({
        name : req.body.name,
        sal : req.body.sal
    })
    const result = await data.save();
    console.log(result);
    res.json(result);
})

app.put("/q4/update/:id",async(req, res) => {
    try {
        const q4Update = await q4Model.findByIdAndUpdate({_id : req.params.id},{name : req.body.name});
        console.log(q4Update);
        res.json(q4Update);
    } catch (error) {
        console.log(err);
    }
})

app.delete("/q4/delete/:id", async(req, res) => {
    try {
        const q4Id = await q4Model.deleteOne({_id:req.params.id});
        console.log(q4Id);
        res.json(q4Id);
    } catch (error) {
        console.log(err);
    }
})

app.get("/q4/show", async (req, res) => {
    const result = await q4Model.find()
    console.log(result);
    res.json(result);
})


app.listen(2004,() => {
    console.log("Running..........");
})