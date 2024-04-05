const express = require("express");
const app = express();
const Employee =  require("./models/employee.model.js")
const employeeRoute = require("./routes/employee.router.js");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", employeeRoute);


app.get("/", (req, res) => {
    console.log("default node api");
    res.status(200).json({
        message: "default node api"}
    );
});


mongoose.connect('mongodb://localhost:27017/Employee_DB')
.then(() => {
    console.log("mongodb connection success");
    app.listen(3000, () => {
        console.log("server started on port 3000")
    })
}).catch(() => {
    console.log("mongodb connection failure");
});