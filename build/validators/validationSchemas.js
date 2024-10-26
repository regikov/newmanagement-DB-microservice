"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuthorSchema = exports.createAuthorSchema = exports.updateTopicSchema = exports.createTopicSchema = exports.updateArticleSchema = exports.createArticleSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// joi validation for Article
exports.createArticleSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(50).required(),
    author: joi_1.default.string().required(),
    text: joi_1.default.string().min(10).max(100).required(),
    topic: joi_1.default.string()
});
exports.updateArticleSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(50),
    author: joi_1.default.string().optional(),
    text: joi_1.default.string().min(10).max(100),
    topic: joi_1.default.string().optional()
});
// joi validation for Topic 
exports.createTopicSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(50).required(),
    articles: joi_1.default.array().items(joi_1.default.string().required()),
    description: joi_1.default.string().min(1).max(50).required()
});
exports.updateTopicSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(50),
    articles: joi_1.default.array().items(joi_1.default.string()).optional(),
    description: joi_1.default.string().min(1).max(50)
});
// joi validation for Author 
exports.createAuthorSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).max(10).required(),
    gender: joi_1.default.string().required(),
    country: joi_1.default.string().min(1).max(10).required(),
    articles: joi_1.default.string()
});
exports.updateAuthorSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).max(10),
    gender: joi_1.default.string().optional(),
    country: joi_1.default.string().min(1).max(10),
    articles: joi_1.default.string().optional()
});
