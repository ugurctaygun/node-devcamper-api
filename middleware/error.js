const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err,req,res,next) => {
    let error = {...err}
    error.message = err.message;
    console.log(err.stack);
    if(err.name === 'CastError') {
        const message = `Resource not found with the id of ${err.value}`;
        error = new ErrorResponse(message,404);
    }
    res.status(err.statusCode || 500).json({
        success: false,
        error:err.message || 'Server error'
    });
}

module.exports = errorHandler;