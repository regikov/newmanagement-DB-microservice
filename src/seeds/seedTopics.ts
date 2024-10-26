// imports 
import mongoose from "mongoose";
import Topic from "../models/topicModel.js";

// connect to MongoDB 
async function connectionToDatabase() {
    try{
        await mongoose.connect('mongodb://localhost:27017/newsProject')
        console.log("Connected to DB")

    }catch (error){
        console.error("DB connection failed:", error)

    }
}

// seed with data and insert topics 
async function seedTopics() {
    try {
        const topics = [
            {title: "Science", description: "All things smart and scientific", articles: []},
            {title: "Sports", description: "All things sporty and athletic", articles: []},
            {title: "Beauty", description: "All things skincare and makeup", articles: []},
            {title: "Art and Music", description: "All things music and art", articles: []},
            {title: "Politics", description: "All things politics and world news", articles: []}

        ]

        const insertedTopics = await Topic.insertMany(topics) 
        console.log("Authors succesfully seeded")
        return insertedTopics

    }catch (error) {
        console.error("Error while seeding topics:", error)
    }finally{
        mongoose.disconnect()
    }
}

// seed the process (functions) 
async () => {
    connectionToDatabase()
    seedTopics()
}

