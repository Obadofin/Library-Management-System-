const express = require('express');
const router = require('router');

//Import student controller functions

const {
    createStudent,
    getAllStudents,
    getStudentById,
} = require('../controllers/student.controller');

// Define routes for student operations

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);

module.exports = router; 