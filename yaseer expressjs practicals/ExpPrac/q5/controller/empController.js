const empModel = require('../model/empModel.js');

const addEmp = async(req,res) => {
    const data = new empModel({
        name : req.body.name,
        sal : req.body.sal
    })
    const result = await data.save();
    console.log(result);
    res.json(result);
}

const showEmp = async(req,res) => {
    const result = await empModel.find()
    console.log(result);
    res.json(result);
}

const updateEmp = async(req, res) => {
    try {
        const empUpdate = await empModel.findByIdAndUpdate({_id : req.params.id},{name : req.body.name});
        console.log(empUpdate);
        res.json(empUpdate);
    } catch (error) {
        console.log(error);
    }
}

const deleteEmp = async(req,res) => {
    try {
        const deleteId = await empModel.deleteOne({_id:req.params.id});
        console.log(deleteId);
        res.json(deleteId);
    } catch (error) {
        console.log(err);
    }
}

module.exports = {addEmp,updateEmp,deleteEmp,showEmp}