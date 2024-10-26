
## News Web App 

This NewsApp project is built using a microservices architecture to manage articles, authors, and topics separately. 

The backend is implemented with Node.js and TypeScript, with services for articles, authors, and topics. Each service is modular, allowing for scalability and independent development.

## Tech Stack
- **Node.js** - JavaScript runtime environment.
- **TypeScript** - Superset of JavaScript for static typing.
- **Express.js**- Web application framework for routing and API handling.
- **MongoDB**- NoSQL database for storing articles, authors, and topics.
- **Mongoose** - ODM for MongoDB to manage models and schemas.
- **Joi** - Validation library for schema-based data validation.

## Features

- CRUD operations for Articles, Authors, and Topics.
- Validation of input data using Joi.
- Modular and scalable microservices architecture.
- Centralized error handling.
- Mongoose models for data management in MongoDB.
- Utility functions for common operations across services.

## Project Structure

```bash
NEWSAPP-MICROSERVICES-DB
├── src/                    
│   ├── article-service/          
│   │   ├── articleController.ts
│   │   ├── articleRoutes.ts
│   │   ├── authorController.ts
│   │   ├── authorRoutes.ts
│   │   └── server.ts
│   ├── middlewares/              
│   │   ├── errorHandler.ts
│   │   └── index.ts
│   ├── models/                  
│   │   ├── articleModel.ts
│   │   ├── authorModel.ts
│   │   └── topicModel.ts
│   ├── seeds/               
│   ├── topic-service/            
│   │   ├── topicController.ts
│   │   ├── topicRoutes.ts
│   │   └── server.ts
│   ├── utils/                    
│   │   └── index.ts
│   └── validators/               
│       └── validationSchemas.ts
├── .gitignore                    
├── package.json                  
├── tsconfig.json                 
└── README.md                     
```

## Folder Explanation

- article-service: Contains controllers and routes for handling article and author functionalities, along with the main server setup for the service.

- topic-service: Manages the topic-related logic, including controllers, routes, and server.

- middlewares: Contains centralized error handling middleware to handle exceptions and provide standardized error responses.

- models: Mongoose schemas and models for articles, authors, and topics.

- seeds: Placeholder for seed data used to populate the database in development or testing environments.

- utils: Contains utility functions shared across services for common functionality.

- validators: Joi schemas for validating incoming request data to ensure consistency and data integrity.


## Installation and configuration 

1.Clone the repository:

```bash
Copy code
git clone https://github.com/your-username/newsapp-microservices-db.git

cd newsapp-microservices-db
```

2. Install dependencies:

```bash
npm install
```
3. Compile TypeScript:

```bash
npm run build
```

4. Create a .env file in the root directory to store environment variables, such as MongoDB connection URI and ports for each microservice.

5. Refer to .env.example for required environment variables.

Example .env:

```plaintext
MONGO_URI=mongodb://localhost:27017/newsapp
ARTICLE_SERVICE_PORT=3001
TOPIC_SERVICE_PORT=3002
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Start the production server:

```bash
npm start
```
Each microservice runs on a separate port as specified in the .env file.

## Endpoints
### Article Service
Articles
- GET /articles: Fetch all articles.
- POST /articles: Create a new article.
- PUT /articles/: Update an article by ID.
- DELETE /articles/: Delete an article by ID.

Authors
- GET /authors: Fetch all authors.
- POST /authors: Create a new author.
- PUT /authors/: Update an author by ID.
- DELETE /authors/: Delete an author by ID.

### Topic Service
Topics
- GET /topics: Fetch all topics.
- POST /topics: Create a new topic.
- PUT /topics/: Update a topic by ID.
- DELETE /topics: Delete a topic by ID.

## Example Request and Response

GET /articles = Fetch all articles.

Request:
```http
GET http://localhost:<ARTICLE_SERVICE_PORT>/articles
```

Response:

```json
[
  {
    "id": "635b8f8a5b2f1b001c8d5f1a",
    "title": "Breaking News: Major Event",
    "author": "John Doe",
    "text": "Detailed description of the major event happening...",
    "topic": "World News",
    "createdAt": "2023-10-26T12:00:00Z",
    "updatedAt": "2023-10-26T12:00:00Z"
  },
  {
    "id": "635b8f8a5b2f1b001c8d5f1c",
    "title": "Tech Update: New Innovation",
    "author": "Jane Smith",
    "text": "A deep dive into the latest innovation in tech...",
    "topic": "Technology",
    "createdAt": "2023-10-25T15:00:00Z",
    "updatedAt": "2023-10-25T15:00:00Z"
  }
]

```
