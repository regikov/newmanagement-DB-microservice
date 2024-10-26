import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface ITopic extends Document {
    title: string, 
    articles: ObjectId[], 
    description: string,
    addArticle(articleId:ObjectId):void, 
    removeArticle(articleId:ObjectId) :void
 }
 
 const topicSchema: Schema = new Schema({
    title:{type:String, required: true}, 
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    description: {type:String, required:true}, 
 });
 
 topicSchema.methods.addArticle = function (articleId:mongoose.Schema.Types.ObjectId) {
   if(!this.articles.includes(articleId)) {
    this.articles.push(articleId)
 } }

 topicSchema.methods.removeArticle = function(articleId:mongoose.Schema.Types.ObjectId) {
    this.articles = this.articles.filter((id:mongoose.Schema.Types.ObjectId) => id.toString() !==articleId.toString())  //Using toString() ensures you're comparing the string values of the ObjectIds, 
 }

 const Topic = mongoose.model<ITopic>('Topic', topicSchema)

 export default Topic


 