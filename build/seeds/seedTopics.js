"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports 
const mongoose_1 = __importDefault(require("mongoose"));
const topicModel_js_1 = __importDefault(require("../models/topicModel.js"));
// connect to MongoDB 
async function connectionToDatabase() {
    try {
        await mongoose_1.default.connect('mongodb://localhost:27017/newsProject');
        console.log("Connected to DB");
    }
    catch (error) {
        console.error("DB connection failed:", error);
    }
}
// seed with data and insert topics 
async function seedTopics() {
    try {
        const topics = [
            { title: "Science", description: "All things smart and scientific", articles: [] },
            { title: "Sports", description: "All things sporty and athletic", articles: [] },
            { title: "Beauty", description: "All things skincare and makeup", articles: [] },
            { title: "Art and Music", description: "All things music and art", articles: [] },
            { title: "Politics", description: "All things politics and world news", articles: [] }
        ];
        const insertedTopics = await topicModel_js_1.default.insertMany(topics);
        console.log("Authors succesfully seeded");
        return insertedTopics;
    }
    catch (error) {
        console.error("Error while seeding topics:", error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}
// seed the process (functions) 
async () => {
    connectionToDatabase();
    seedTopics();
};
