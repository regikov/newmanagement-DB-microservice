"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = require("../middlewares/index.js");
const errorHandler_js_1 = require("../middlewares/errorHandler.js");
// creating instance of the express server
const app = (0, express_1.default)();
//port
const PORT = 3001;
//middlewares
app.use(index_js_1.jsonParser);
app.use(errorHandler_js_1.errorHandler);
//listen on port (gateway)
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
// TO DO: mounting router
