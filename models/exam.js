const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    Exam_ID: { type: String, required: true, unique: true },
    Date: { type: Date, required: true },
    Time: { type: String, required: true },
    Course_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

module.exports = mongoose.model("Exam", examSchema);