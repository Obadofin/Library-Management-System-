const Student = require("../models/student.model");
const asyncHandler = require("../utils/asyncHandler");

/**
 * @desc   Create a new student
 * @route  POST /students
 * @access Public
 */

const createStudent = asyncHandler(async (req, res) => {
  const { name, email, studentId } = req.body;

  const student = await Student.create({
    name,
    email,
    studentId,
  });

  res.status(201).json({
    status: "success",
    data: student,
  });
});


/**
 * @desc   Get all students
 * @route  GET /students
 * @access Public
 */

const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    status: "success",
    results: students.length,
    data: students,
  });
});

/**
 * @desc   Get a student by ID
 * @route  GET /students/:id
 * @access Public
 */

const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(404);
    throw new Error("Student not found");
  }

  res.status(200).json({
    status: "success",
    data: student,
  });
});


module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
};