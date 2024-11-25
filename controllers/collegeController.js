const collegeService = require("../services/collegeService");

module.exports = {
    // Student Controller
    getStudents: async(req, res) => {
        try {
            const students = await collegeService.getStudents();
            res.json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createStudent: async(req, res) => {
        try {
            const student = await collegeService.createStudent(req.body);
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Faculty Controller
    getFaculty: async(req, res) => {
        try {
            const faculty = await collegeService.getFaculty();
            res.json(faculty);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createFaculty: async(req, res) => {
        try {
            const faculty = await collegeService.createFaculty(req.body);
            res.status(201).json(faculty);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Course Controller
    getCourses: async(req, res) => {
        try {
            const courses = await collegeService.getCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createCourse: async(req, res) => {
        try {
            const course = await collegeService.createCourse(req.body);
            res.status(201).json(course);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Department Controller
    getDepartments: async(req, res) => {
        try {
            const departments = await collegeService.getDepartments();
            res.json(departments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createDepartment: async(req, res) => {
        try {
            const department = await collegeService.createDepartment(req.body);
            res.status(201).json(department);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Exam Controller
    getExams: async(req, res) => {
        try {
            const exams = await collegeService.getExams();
            res.json(exams);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createExam: async(req, res) => {
        try {
            const exam = await collegeService.createExam(req.body);
            res.status(201).json(exam);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Fee Controller
    getFees: async(req, res) => {
        try {
            const fees = await collegeService.getFees();
            res.json(fees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createFee: async(req, res) => {
        try {
            const fee = await collegeService.createFee(req.body);
            res.status(201).json(fee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};