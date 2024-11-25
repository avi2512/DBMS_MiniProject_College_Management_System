const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    Faculty_ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Email: { type: String, unique: true },
    Phone: { type: String },
    Department_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});

module.exports = mongoose.model("Faculty", facultySchema);