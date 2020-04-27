
const Bootcamp = require('../models/Bootcamps');

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req,res,next) => {
    
    res.status(200).json({success: true, msg: 'Show All Bootcamps'});
}

// @desc Get bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req,res,next) => {
    res.status(200).json({success: true, msg:'Get bootcamp'});
}

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Public
exports.createBootcamp = async (req,res,next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success: true, msg:'Create new Bootcamp', data: bootcamp});  
    } catch (error) {
        res.status(400).json({success: false, msg:'Already created'})
    }
    
}

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = (req,res,next) => {
    res.status(200).json({success: true, msg:`Update bootcamp ${req.params.id}`});
}

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({success: true, msg:'Delete bootcamp'});
}