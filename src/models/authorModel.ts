import mongoose, { Schema, Document, ObjectId } from 'mongoose';
 
 const authorSchema: Schema = new Schema({
    name:{type: String},
    gender:{type:String},
    country:{type:String},
    articles:[{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
    
 });
 

 const Author = mongoose.model('Article', authorSchema)

 export default Author
