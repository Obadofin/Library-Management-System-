const express = require('express');
const router = express.Router();

const {
    createAttendant,
    getAllAttendants,
    getAttendantById,
    updateAttendant,
    deleteAttendant,
} = require('../controllers/attendant.controller');

//Create attendant
router.post('/', createAttendant);

//Get all attendants
router.get('/', getAllAttendants);

//Get one attendant 
router.get('/:id', getAttendantById);

//Update attendant
router.put('/:id', updateAttendant);

//Delete attendant
router.delete('/:id', deleteAttendant);

module.exports = router;
