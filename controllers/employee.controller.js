const Employee = require("../models/employee.model.js");

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createEmployee = async (req, res) => {
    try {
        console.log(req.body);
        const employee = await Employee.create(req.body);
        res.status(200).json(employee);
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getEmployee = async (req, res) => {
   try {
    const {id} = req.params;
    const employee = await Employee.findById(id);
    if(!employee) {
        res.status(404).json({
            message: "Employee Id not found"
        })        
    } else {
        res.status(200).json(employee)
    }
   } catch(error) {
    res.status(500).json({
        message: error.message
    })
   } 
}

const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndUpdate(id, req.body);
        if(employee) {
            const employeeUpdated = await Employee.findById(id);
            res.status(200).json(employeeUpdated)
        } else {
            res.status(404).json({
                message: "Employee Id not found"
            })
        }
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if(employee) {
            res.status(200).json({
                message: "Employee Id deleted success"
            })
        } else {
            res.status(404).json({
                message: "Employee Id Not found"
            })
        }
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};