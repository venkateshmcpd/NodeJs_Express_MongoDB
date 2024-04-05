const express = require("express")
const router = express.Router();
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require("../controllers/employee.controller.js");
const Employee = require("../models/employee.model.js");

router.get("/api/employees", getEmployees)

router.post("/api/employee", createEmployee)

router.get("/api/employee/:id", getEmployee)

router.post("/api/employee/:id", updateEmployee)

router.delete("/api/employee/:id", deleteEmployee);

module.exports = router;