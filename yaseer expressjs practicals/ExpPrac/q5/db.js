const mongoose = require('mongoose');

const connectMongo = () => {
    mongoose.connect("mongodb://localhost:27017/Q5") .then((result) => {
}).catch((err) => {
    console.log(err);
})
}

module.exports = connectMongo;