const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    Course_ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Credits: { type: Number, required: true },
    Department_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});

module.exports = mongoose.model("Course", courseSchema);