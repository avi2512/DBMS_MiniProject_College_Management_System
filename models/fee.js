const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    Fee_ID: { type: String, required: true, unique: true },
    Amount: { type: Number, required: true },
    Due_Date: { type: Date, required: true },
    Student_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Student" }
});

module.exports = mongoose.model("Fee", feeSchema);