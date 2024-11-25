const Student = require("../models/student.js");
const Faculty = require("../models/faculty.js");
const Course = require("../models/course");
const Department = require("../models/department");
const Exam = require("../models/exam");
const Fee = require("../models/fee");

module.exports = {
    // Student Service
    getStudents: () => Student.find(),
    createStudent: (data) => Student.create(data),

    // Faculty Service
    getFaculty: () => Faculty.find(),
    createFaculty: (data) => Faculty.create(data),

    // Course Service
    getCourses: () => Course.find(),
    createCourse: (data) => Course.create(data),

    // Department Service
    getDepartments: () => Department.find(),
    createDepartment: (data) => Department.create(data),

    // Exam Service
    getExams: () => Exam.find(),
    createExam: (data) => Exam.create(data),

    // Fee Service
    getFees: () => Fee.find(),
    createFee: (data) => Fee.create(data)
};