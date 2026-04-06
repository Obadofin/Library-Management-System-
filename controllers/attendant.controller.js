const Attendant = require("../models/attendant.models");
const asyncHandler = require('../utils/asyncHandler');

/**
 *  @desc Create a new attendant
 * @route POST  /attendants
 * @access Public
 */

const  createAttendant = asyncHandler(async (req, res) => {
    const attendant = await Attendant.create(req.body);
    res.status(201).json({
        status: "success",
        data: attendant,
    });
});

/**
 * @desc Get all attendants
 * @route GET /attendants
 */

const getAllAttendants = asyncHandler(async (req, res) => {
    const attendants = await Attendant.find();

    res.status(200).json({
        success: true,
        count: attendants.length,
        data: attendants,
    });
});


/**
 * @desc Get an attendant by ID
 * @route GET /attendants/:id
 */

const getAttendantById = asyncHandler(async (req, res) => {
    const attendant = await Attendant.findById(req.params.id);
    if (!attendant) {
        res.status(404);
        throw new Error("Attendant not found");
    }
    
    res.status(200).json({
        success: true,
        data: attendant,
    });
});


/**
 * @desc Update attendant
 * @route PUT /attendants/:id
 */

const updateAttendant = asyncHandler(async (req, res) => {
    const attendant = await Attendant.findByIdAndUpdate(
        req.params.id, 
        req.body, { 
            new: true, 
            runValidators: true
         });
    if (!attendant) {
        res.status(404);
        throw new Error("Attendant not found");
    }
    res.status(200).json({
        success: true,
        data: attendant,
    });
});


/**
 * @desc Delete attendant
 * @route DELETE /attendants/:id
 */

const deleteAttendant = asyncHandler(async (req, res) => {
    const attendant = await Attendant.findByIdAndDelete(req.params.id);

    if (!attendant) {
        res.status(404);
        throw new Error("Attendant not found");
    }
    res.status(200).json({
        success: true,
        message: "Attendant deleted successfully",
    });
});

module.exports = {
    createAttendant,
    getAllAttendants,
    getAttendantById,
    updateAttendant,
    deleteAttendant,
};