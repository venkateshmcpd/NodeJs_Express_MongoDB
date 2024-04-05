const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel;