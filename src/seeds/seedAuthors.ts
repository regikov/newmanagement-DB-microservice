// imports 
import mongoose from "mongoose"
import Author from "../models/authorModel.js";
import { error } from "console";

// connect to mongoDB 
async function connectionToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/newsProject' ) 
        console.log("Connected to MongoDB")
    } catch {
        console.error("An error has occured:", error)
    }
}

// seed with data and insert authors 
async function seedAuthors() {
    try {
        const authors = [
            {name:"R2D2", gender:"non-binary", country:"USA", articles:[]}, 
            {name:"Tinker Bell", gender:"female", country:"Germany", articles:[]}, 
            {name:"The Powderpuff Girls", gender:"female", country:"USA", articles:[]}, 
            {name:"The Grinch", gender:"male", country:"United Kingdom", articles:[]}, 
            {name:"Eric Cartment", gender:"male", country:"Hungary", articles:[]}, 
            {name:"Pluto", gender:"non-binary", country:"Slovakia", articles:[]}, 
            {name:"Road Runner", gender:"non-binary", country:"Italy", articles:[]}, 
            {name:"Scooby Doo", gender:"male", country:"Spain", articles:[]}, 
            {name:"Sponge Bob", gender:"male", country:"Argentina", articles:[]}, 
            {name:"Squidward", gender:"male", country:"Mexico", articles:[]}, 
            {name:"Taylor Swift", gender:"female", country:"USA", articles:[]}, 
            {name:"Snoop Dogg", gender:"male", country:"Canada", articles:[]}, 
            {name:"Celion Dion", gender:"female", country:"France", articles:[]}, 
            {name:"Mariah Carey", gender:"female", country:"Portugal", articles:[]}, 
            {name:"Marilyn Monroe", gender:"female", country:"", articles:[]}, 
        ]
        const insertedAuthors = await Author.insertMany(authors)
        console.log("Authors successfully seeded", insertedAuthors)
        return insertedAuthors 
    } catch(error) {
        console.error("Error while seeding authors;", error)
    }finally {
        mongoose.disconnect()
    }
}

// seed the process (functions)

(async () => {
    await connectionToDatabase()
    await seedAuthors()
})

