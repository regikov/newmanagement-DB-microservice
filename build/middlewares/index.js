"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateAuthor = exports.validateCreateAuthor = exports.validateUpdateTopic = exports.validateCreateTopic = exports.validateUpdateArticle = exports.validateCreateArticle = exports.jsonParser = void 0;
const express_1 = __importDefault(require("express"));
const validationSchemas_js_1 = require("../validators/validationSchemas.js");
//json parser
exports.jsonParser = express_1.default.json();
// validatoion middleware
const validateCreateArticle = (req, res, next) => {
    const { error } = validationSchemas_js_1.createArticleSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateCreateArticle = validateCreateArticle;
const validateUpdateArticle = (req, res, next) => {
    const { error } = validationSchemas_js_1.updateArticleSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateUpdateArticle = validateUpdateArticle;
const validateCreateTopic = (req, res, next) => {
    const { error } = validationSchemas_js_1.createTopicSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateCreateTopic = validateCreateTopic;
const validateUpdateTopic = (req, res, next) => {
    const { error } = validationSchemas_js_1.updateTopicSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateUpdateTopic = validateUpdateTopic;
const validateCreateAuthor = (req, res, next) => {
    const { error } = validationSchemas_js_1.createAuthorSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateCreateAuthor = validateCreateAuthor;
const validateUpdateAuthor = (req, res, next) => {
    const { error } = validationSchemas_js_1.updateAuthorSchema.validate(req.body);
    if (error) {
        error.isJoi = true;
        return next(error);
    }
    next();
};
exports.validateUpdateAuthor = validateUpdateAuthor;
