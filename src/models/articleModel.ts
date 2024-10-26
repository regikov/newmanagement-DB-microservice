import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface IArticle extends Document {
    title:string, 
    author:ObjectId, 
    text:string, 
    topic: ObjectId,
 }
 
 const articleSchema: Schema = new Schema({
    title:{type:String, required: true}, 
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'Author' }, 
    text:{type:String, required:true}, 
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }
 },{ timestamps: true });
 

 const Article = mongoose.model<IArticle>('Article', articleSchema)

 export default Article


