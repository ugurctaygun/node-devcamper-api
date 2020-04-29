
const Bootcamp = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req,res,next) => {
   try {
       const bootcamps = await Bootcamp.find();
       res.status(200).json({success:true, data: bootcamps});
   } catch (error) {
       res.status(400).json({success:false});
   }
}

// @desc Get bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
          return  res.status(400).json({success:false, msg:'Bootcamp does not exists'});
        } 
        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        // res.status(400).json({success: false});
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
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
exports.updateBootcamp = async (req,res,next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!bootcamp){
        return res.status(400).json({success: false, msg: 'bootcamp does not exists'});
    }
    res.status(200).json({success: true, data: bootcamp});
}

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = async (req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp) {
            res.status(400).json({success: fasle});
        }
        res.status(200).json({success:true, data: {}, msg:'Bootcamp deleted'});
    } catch (error) {
        res.status(400).json({success:false});
    }
}