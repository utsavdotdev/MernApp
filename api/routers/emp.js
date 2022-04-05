const express = require("express");
const router = new express.Router();
const Employee = require("../models/employee");

// POST Method
router.post("/emp", async (req, res) => {
  // Async await method
  try {
    const emp = new Employee(req.body);
    const empdata = await emp.save();
    res.status(201).json(empdata);
  } catch (e) {
    res.status(400).json(e);
  }
  console.log(req.body);
});

//GET Method
router.get("/emp", async (req, res) => {
  try {
    const findEmp = await Employee.find();
    res.status(201).send(findEmp);
  } catch (e) {
    res.status.send(e);
  }
});

//GET method to fetch specific emp data
router.get("/emp/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const empSpecificData = await Employee.findById(_id);

    if (!empSpecificData) {
      return res.status(404).send();
    } else {
      res.status(201).send(empSpecificData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// update the emp by id
router.patch("/emp/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateEmp = await Employee.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updateEmp);
  } catch (e) {
    res.status(404).send(e);
  }
});

//delete the emp data by specific id
router.delete("/emp/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteEmp = await Employee.findByIdAndDelete(_id);
    res.status(202).send(deleteEmp);
  } catch {
    res.status(500).send(e);
  }
});

module.exports = router;
