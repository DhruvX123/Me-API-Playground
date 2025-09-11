[README.md](https://github.com/user-attachments/files/22268353/README.md)
# REST-API-USING-NodeJS-MongoDB-ExpressJS
It is a simple Node.js backend application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books stored in a MongoDB database. The application includes additional features such as pagination and search functionality.

- Features

• CRUD operations: Create, Read, Update, Delete items

• Pagination for listing items

• Search functionality by title or author/director

• API documentation with Swagger

- Prerequisites

• Node.js (v14 or higher)

• npm (v6 or higher)

• MongoDB (local instance or MongoDB Atlas)

- Installation

Clone the repository:
git clone https://github.com/DhruvX123/REST-API-USING-NodeJS-MongoDB-ExpressJS.git

cd REST-API-USING-NodeJS-MongoDB-ExpressJS

Install dependencies:
npm install

Set up MongoDB:

Local MongoDB instance:
Ensure that MongoDB is installed and running on your local machine. By default, the application connects to mongodb://localhost:27017/itemdb.

Start the server:

npm start
The server will start on http://localhost:3000.

- API Endpoints

• GET /items

Fetch a list of all items with optional pagination and search query parameters.

Example: GET '/items?page=1&limit=1&title=mockingbird'

• GET /items/

Fetch a single item by its ID.

Example: GET '/items/60d2c6b7e87a3a3b5c71c416'

• POST /items

Example: 
{
  "title": "The Great Gatsby",
  "authorOrDirector": "F. Scott Fitzgerald",
  "description": "A novel set in the Jazz Age that tells the story of Jay Gatsby's love for Daisy Buchanan.",
  "releaseDate": "1925-04-10"
}

• PUT /items/

Update an existing item by its ID.

Example: PUT '/items/60d2c6b7e87a3a3b5c71c416'

• DELETE /items/

Delete an item by its ID.

Example: DELETE '/items/60d2c6b7e87a3a3b5c71c416'

- Additional Feature

I have implemented Swagger dependency in the API. It is a framework in which we can test our REST APIs for different HTTP requests i.e. :

GET

POST

PUT

DELETE

Swagger documentation is available at 'http://localhost:3000/api-docs'. You can use this interface to explore and test the API endpoints.

- Bonus Implemented

Pagination: The GET '/items' endpoint supports pagination through the 'page' and 'limit' query parameters.

Search Functionality: The GET '/items' endpoint supports searching by 'title' and 'authorOrDirector' through query parameters.
