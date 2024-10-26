import { Request, Response, NextFunction } from "express";

//error handling middleware
export const errorHandler = (err:any, req:Request, res:Response, next: NextFunction) => {
    console.error(err.stack) 
    //joi err
    if(err.isJoi) {
        return res.status(400).send({
            message:err.details[0].message, 
            details: err.details
        })
    }
    //other errors
    res.status(err.status || 500).send({
        message:err.message || "Something is wrong!"
    })
} 