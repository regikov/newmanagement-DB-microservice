import Joi from "joi"

// joi validation for Article
export const createArticleSchema = Joi.object({
    title: Joi.string().min(1).max(50).required(), 
    author: Joi.string().required(), 
    text: Joi.string().min(10).max(100).required(),
    topic:Joi.string()
})

export const updateArticleSchema = Joi.object({
    title: Joi.string().min(1).max(50),
    author: Joi.string().optional(),
    text: Joi.string().min(10).max(100),
    topic:Joi.string().optional()
})


// joi validation for Topic 
export const createTopicSchema = Joi.object({
    title:Joi.string().min(1).max(50).required(),
    articles:Joi.array().items(Joi.string().required()), 
    description:Joi.string().min(1).max(50).required()
})

export const updateTopicSchema = Joi.object({
    title:Joi.string().min(1).max(50),
    articles:Joi.array().items(Joi.string()).optional(),
    description:Joi.string().min(1).max(50)
})

// joi validation for Author 
export const createAuthorSchema = Joi.object({
    name:Joi.string().min(1).max(10).required(),
    gender: Joi.string().required(), 
    country: Joi.string().min(1).max(10).required(),
    articles: Joi.string()
})

export const updateAuthorSchema = Joi.object({
    name:Joi.string().min(1).max(10),
    gender: Joi.string().optional(),
    country: Joi.string().min(1).max(10),
    articles: Joi.string().optional()
})

