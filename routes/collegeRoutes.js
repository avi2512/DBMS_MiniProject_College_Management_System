const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController");

// Student Routes
router.get("/students", collegeController.getStudents);
router.post("/students", collegeController.createStudent);

// Faculty Routes
router.get("/faculty", collegeController.getFaculty);
router.post("/faculty", collegeController.createFaculty);

// Course Routes
router.get("/courses", collegeController.getCourses);
router.post("/courses", collegeController.createCourse);

// Department Routes
router.get("/departments", collegeController.getDepartments);
router.post("/departments", collegeController.createDepartment);

// Exam Routes
router.get("/exams", collegeController.getExams);
router.post("/exams", collegeController.createExam);

// Fee Routes
router.get("/fees", collegeController.getFees);
router.post("/fees", collegeController.createFee);

module.exports = router;