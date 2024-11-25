const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    Department_ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Location: { type: String }
});

module.exports = mongoose.model("Department", departmentSchema);