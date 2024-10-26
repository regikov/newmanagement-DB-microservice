"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const articleModel_js_1 = __importDefault(require("../models/articleModel.js"));
const topicModel_js_1 = __importDefault(require("../models/topicModel.js"));
const authorModel_js_1 = __importDefault(require("../models/authorModel.js"));
const console_1 = require("console");
// connecting to mongo
async function connectToDatabase() {
    try {
        await mongoose_1.default.connect('mongodb://localhost:27017/newsProject');
        console.log("Connected to MongoDB");
    }
    catch {
        console.error("Database connection failed with:", console_1.error);
    }
}
// seeding + samlpe articles 
async function seedArticles() {
    try {
        const authors = await authorModel_js_1.default.findOne();
        const topics = await topicModel_js_1.default.findOne();
        // check length of author if 0 error no data add data
        const articles = [
            { title: "AI Ethics: Are Droids Taking Over?'",
                author: authors[0]._id,
                text: "An exploration of droid ethics and whether robots are taking jobs away from humans.'",
                topic: topics[2]._id, },
            { title: 'Fairy Dust: The Secret Ingredient to Happiness',
                author: authors[1]._id,
                text: 'Tinker Bell shares insights into the power of fairy dust and how it brings joy to the world.',
                topic: topics[0]._id
            },
            {
                title: 'The Ultimate Guide to Saving the World in Style',
                author: authors[2]._id,
                text: 'The Powderpuff Girls offer tips on how to save the world while looking fabulous.',
                topic: topics[5]._id
            },
            {
                title: 'Why Stealing Christmas Isnt All Bad',
                author: authors[3]._id, // The Grinch
                text: 'A humorous take on The Grinchs views on why stealing Christmas might be a good thing.',
                topic: topics[7]._id // Science
            },
            {
                title: 'How to Be the Center of Attention Without Even Trying',
                author: authors[4]._id,
                text: 'Cartmans guide to always being the most important person in the room.',
                topic: topics[4]._id
            },
            {
                title: 'The Great Space Dog Chase: Plutos Adventures',
                author: authors[5]._id,
                text: 'Pluto recounts his intergalactic adventures and why dogs belong in space.',
                topic: topics[2]._id
            },
            {
                title: 'Fast, Furious, and Feathered: The Roadrunner Chronicles',
                author: authors[6]._id,
                text: 'Road Runner shares tips on how to stay ahead of the competition—literally.',
                topic: topics[3]._id
            },
            {
                title: 'Ghosts, Goblins, and Mysteries: A Dogs Perspective',
                author: authors[7]._id,
                text: 'Scooby Doo discusses how to stay calm when faced with scary mysteries and strange creatures.',
                topic: topics[9]._id
            },
            {
                title: 'Living in a Pineapple: A Sponges Story',
                author: authors[8]._id,
                text: 'SpongeBob talks about life under the sea, living in a pineapple, and dealing with quirky neighbors.',
                topic: topics[9]._id
            },
            {
                title: 'The Art of Grumpiness: Why I Love Being Miserable',
                author: authors[9]._id,
                text: 'Squidward reflects on how being grumpy and disillusioned is actually an art form.',
                topic: topics[1]._id
            },
            {
                title: 'How to Write a Hit Song in 10 Minutes',
                author: authors[10]._id,
                text: 'Taylor Swift offers insights into how she writes hit songs that resonate with millions.',
                topic: topics[4]._id
            },
            {
                title: 'From the Streets to Stardom: Snoops Journey',
                author: authors[11]._id,
                text: 'Snoop Dogg recounts his rise from the streets to becoming one of the most iconic figures in hip-hop.',
                topic: topics[4]._id
            },
            {
                title: 'Mastering the Art of the Love Ballad',
                author: authors[12]._id,
                text: 'Celine Dion shares her tips on creating powerful love ballads that touch the heart.',
                topic: topics[4]._id
            },
            {
                title: 'All I Want for Christmas: The Story Behind the Song',
                author: authors[13]._id,
                text: 'Mariah Carey reveals the inspiration behind her iconic Christmas song.',
                topic: topics[4]._id
            },
            {
                title: 'Diamonds Are a Girls Best Friend: Why Marilyn Was Right',
                author: authors[14]._id,
                text: 'A glamorous look into why diamonds truly are a girls best friend.',
                topic: topics[0]._id
            }
        ];
        await articleModel_js_1.default.insertMany(articles);
        console.log('Articles seeded successfully');
    }
    catch (error) {
        console.error("Error seeding articles:", error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}
// running the seeding process (functions)
