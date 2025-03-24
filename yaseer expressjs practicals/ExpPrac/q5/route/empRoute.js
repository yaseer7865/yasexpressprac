const express = require('express');
const emp = require('../controller/empController.js');

const router = express.Router();

router.get("/show",emp.showEmp);
router.post("/add", emp.addEmp);
router.patch("/update/:id", emp.updateEmp);
router.delete("/delete/:id", emp.deleteEmp);

module.exports = router;
