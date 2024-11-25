const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Student_ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Address: { type: String },
    Email: { type: String, unique: true },
    Phone: { type: String },
    DOB: { type: Date },
    Department_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});

module.exports = mongoose.model("Student", studentSchema);