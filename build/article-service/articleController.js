"use strict";
// import express, { Request, Response } from 'express';
// import Article from '../models/articleModel.js';
// import Topic from '../models/topicModel.js';
// // ENDPOINT 1. Get all articles, optionally filtered by topicId
// export const getAllArticles = async (req: Request, res: Response) => {
//   try {
//     const { topicId } = req.query;
//     if (topicId) {
//       const topic = await Topic.findById(topicId).populate('articles');
//       if (!topic) {
//         return res.status(404).json({ error: 'Topic not found' });
//       }
//       return res.json(topic.articles); 
//     }
//     const allArticles = await Article.find().populate('author topic');
//     res.json(allArticles);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error'});
//   }
// }
// // ENDPOINT 2: Get Article by _id
// export const getArticleById = async (req: Request, res: Response) => {
//   try {
//     const articleId = req.params.articleId;
//     // Fetch article by MongoDB `_id`
//     const article = await Article.findById(articleId).populate('author topic');
//     if (!article) {
//       return res.status(404).json({ error: 'Article not found' });
//     }
//     res.json(article);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error'});
//   }
// };
// // ENDPOINT 3: Update article by _id: 
// export const updateArticleById = async (req: Request, res: Response) => {
//   try {
//     const articleId = req.params.articleId;
//     const { title, author, text, topic } = req.body;
//     const updatedArticle = await Article.findByIdAndUpdate(
//       articleId,
//       { title, author, text, topic },
//       { new: true, runValidators: true } 
//     );
//     if (!updatedArticle) {
//       return res.status(404).json({ error: 'Article not found' });
//     }
//     res.json(updatedArticle);
//   } catch (error) {
//     res.status(404).json({ error: "Something went wrong"});
//   }
// };
// // ENDPOINT 4: Delete article by id 
// export const deleteArticleById = async (req: Request, res: Response) => {
//   try {
//     const articleId = req.params.articleId;
//     const deletedArticle = await Article.findByIdAndDelete(articleId);
//     if (!deletedArticle) {
//       return res.status(404).json({ error: 'Article not found' });
//     }
//     await Topic.updateMany({}, { $pull: { articles: articleId } });
//     res.status(204).send(); 
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error'});
//   }
// };
// // ENDPOINT 5. Create new article 
