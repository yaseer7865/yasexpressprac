const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Q7").then(() => {
}).catch((err) => {
    console.log(err);
})

const Q7Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    sal : {
        type : Number,
        required : true
    }
})
const Q7Model = new mongoose.model("Q7", Q7Schema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.post("/add", async(req,res) => {
    const data = new Q7Model({
        name : req.body.name,
        sal : req.body.sal
    });
    res.json(await data.save());
})

app.get("/show", async(req,res) => {
    const arr = await Q7Model.find();
    res.render('show', { arr : arr});
});


app.listen(2007, () => {
    console.log("Running on 2007");
})