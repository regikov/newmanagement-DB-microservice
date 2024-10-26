import express, {Request, Response, NextFunction} from "express"
import { createArticleSchema, createTopicSchema, updateArticleSchema, updateTopicSchema, createAuthorSchema, updateAuthorSchema } from "../validators/validationSchemas.js"

//json parser
export const jsonParser = express.json() 

// validatoion middleware
export const validateCreateArticle = (req: Request, res:Response, next:NextFunction) => {
    const {error} = createArticleSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next()
}

export const validateUpdateArticle = (req: Request, res:Response, next:NextFunction) => {
    const {error} = updateArticleSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next()
}

export const validateCreateTopic = (req: Request, res:Response, next:NextFunction) => {
    const {error} = createTopicSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next()
}

export const validateUpdateTopic = (req: Request, res:Response, next:NextFunction) => {
    const {error} = updateTopicSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next()
}

export const validateCreateAuthor = (req: Request, res:Response, next:NextFunction) => {
    const {error} = createAuthorSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next()
}

export const validateUpdateAuthor = (req: Request, res:Response, next:NextFunction) => {
    const {error} = updateAuthorSchema.validate(req.body)

    if (error) {
        error.isJoi = true
        return next (error)
    }
    next() 
}


