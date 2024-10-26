"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
//error handling middlew.
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    //joi err
    if (err.isJoi) {
        return res.status(400).send({
            message: err.details[0].message,
            details: err.details
        });
    }
    //other errors
    res.status(err.status || 500).send({
        message: err.message || "Something is wrong!"
    });
};
exports.errorHandler = errorHandler;
