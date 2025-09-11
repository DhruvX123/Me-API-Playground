
# ME - API Playground
It is a basic Node.js backend application that allows users to perform CRUD (Create, Read, Update, Delete) operations and store your own information in MongoDB database. The application includes additional features such as pagination and search functionality.

Structure: 

Me-API Playground/
│
├── index.js                  # Main entry point for your Express server
├── package.json              # Project metadata and dependencies
├── swagger.js                # Swagger/OpenAPI setup for API documentation
│
├── controller/
│   └── profileControl.js     # Controller logic for profile routes (CRUD, search, etc.)
│
├── models/
│   └── profile.js            # Mongoose schema/model for profile documents
│
├── routes/
│   └── profileroute.js       # Express router for profile-related endpoints
│
├── client/
│   └── index.html            # Minimal HTML UI for interacting with your API
│
└── Playground.postman_collection.json # Postman collection for API testing



- Features

• CRUD operations: Create, Read, Update, Delete Profile

• Pagination for listing Profiles

• Search functionality by skill

• API documentation with Swagger

- Prerequisites

• Node.js (v14 or higher)

• npm (v6 or higher)

• MongoDB (local instance or MongoDB Atlas)

- Installation

Clone the repository:
git clone https://github.com/DhruvX123/Me-API-Playground.git

cd Me-API-Playground

Install dependencies:
npm install

Set up MongoDB:

Local MongoDB instance:
Ensure that MongoDB is installed and running on your local machine. By default, the application connects to mongodb://localhost:27017/profiledb.

Start the server:

npm start
The server will start on http://localhost:3000.

- API Endpoints

• GET /profiles

Fetch a list of all profiles with optional pagination and search query parameters.

Example: GET '/profiles?skills=Node'

• GET /profiles/:id

Fetch a single profile by its ID.

Example: GET '/profiles/68c252bc4816d27ac5278834'

• POST /profiles

Example: 
{

  "name": "Dhruv Agarwal",

  "email": "dhruvagar135@gmail.com",

  "education": "B.Tech Computer Science",

  "skills": ["JavaScript", "Node.js", "Express", "MongoDB", "Nest.js", "GraphQL", "Postman", "Swagger", "REST API"],

  "projects": [

    {

      "title": "Book Management System",

      "description": "It is a Node.js backend application that allows users to perform CRUD (Create, Read, Update, 

                      Delete) operations on a collection of books stored in a MongoDB database. 

                      Features - 

                      Pagination for listing items 

                      Search functionality by title or author/director 

                      API documentation with Swagger",

      "links": ["https://github.com/DhruvX123/REST-API-USING-NodeJS-MongoDB-ExpressJS"]

    }

  ],

  "work": ["Software Developer Intern at Information Data Systems"],

  "links": {

    "github": "https://github.com/DhruvX123",

    "linkedin": "https://www.linkedin.com/in/dhruv-agarwal-412164176/",

    "portfolio": "https://drive.google.com/file/d/1VAEvkr1EY_OmeA2uE9QIur5cuC3VDjdu/view?usp=drivesdk"

  }

}

• PUT /profiles/

Update an existing profile by its ID.

Example: PUT '/profiles/60d2c6b7e87a3a3b5c71c416'

• DELETE /profiles/

Delete profile by its ID.

Example: DELETE '/profiles/60d2c6b7e87a3a3b5c71c416'

- Additional Feature

I have implemented Swagger UI in the API. It is a framework in which we can test our REST APIs for different HTTP requests i.e. :

GET

POST

PUT

DELETE

Swagger UI is available at 'http://localhost:3000/api-docs'. You can use this interface to explore and test the API endpoints.

- Bonus Implemented

A GET /health endpoint has been added for liveness checks.

Pagination: The GET '/profiles' endpoint supports pagination through the 'page' and 'limit' query parameters.

Search Functionality: The GET '/profiles' endpoint supports searching by 'Skills' through query parameters.


Resume - https://drive.google.com/file/d/1VAEvkr1EY_OmeA2uE9QIur5cuC3VDjdu/view?usp=drivesdk

