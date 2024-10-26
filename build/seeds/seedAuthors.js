"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports 
const mongoose_1 = __importDefault(require("mongoose"));
const authorModel_js_1 = __importDefault(require("../models/authorModel.js"));
const console_1 = require("console");
// connect to mongoDB 
async function connectionToDatabase() {
    try {
        await mongoose_1.default.connect('mongodb://localhost:27017/newsProject');
        console.log("Connected to MongoDB");
    }
    catch {
        console.error("An error has occured:", console_1.error);
    }
}
// seed with data and insert authors 
async function seedAuthors() {
    try {
        const authors = [
            { name: "R2D2", gender: "non-binary", country: "USA", articles: [] },
            { name: "Tinker Bell", gender: "female", country: "Germany", articles: [] },
            { name: "The Powderpuff Girls", gender: "female", country: "USA", articles: [] },
            { name: "The Grinch", gender: "male", country: "United Kingdom", articles: [] },
            { name: "Eric Cartment", gender: "male", country: "Hungary", articles: [] },
            { name: "Pluto", gender: "non-binary", country: "Slovakia", articles: [] },
            { name: "Road Runner", gender: "non-binary", country: "Italy", articles: [] },
            { name: "Scooby Doo", gender: "male", country: "Spain", articles: [] },
            { name: "Sponge Bob", gender: "male", country: "Argentina", articles: [] },
            { name: "Squidward", gender: "male", country: "Mexico", articles: [] },
            { name: "Taylor Swift", gender: "female", country: "USA", articles: [] },
            { name: "Snoop Dogg", gender: "male", country: "Canada", articles: [] },
            { name: "Celion Dion", gender: "female", country: "France", articles: [] },
            { name: "Mariah Carey", gender: "female", country: "Portugal", articles: [] },
            { name: "Marilyn Monroe", gender: "female", country: "", articles: [] },
        ];
        const insertedAuthors = await authorModel_js_1.default.insertMany(authors);
        console.log("Authors successfully seeded", insertedAuthors);
        return insertedAuthors;
    }
    catch (error) {
        console.error("Error while seeding authors;", error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}
// seed the process (functions)
(async () => {
    await connectionToDatabase();
    await seedAuthors();
});
