## Backend

This is a server for Paws trust Adoption Site. It contains all the details of the dogs, users and adopters.
Link to the server - https://paws-trust-backend.herokuapp.com

## Learning Goals

- Database validation using sequelize models.
- Working with docker container to run postgres server.
- Implementing Relations, adding them to sequelize models.
- Generating seeder data.
- Implementing routes in express.
- Separating routes using express Router.
- Using auth middleware to manage authorization routes for routes in express.

## Endpoints

/dogs/ - This is a GET call. This endpoint will retrieve all the available dogs from database.
/dogs/:id - This is a GET call. This enpoint will retrieve a particular dog detail based on ID value provided.
/adopter/ - This is a POST call. This endpoint will insert the adopter details into the database. This call requires authentication with bearer token.

/ - This a GET call. This is to test if the server is running.
/echo - This is a POST call. To test POST requests.
/signup - This is a POST call. To create a new user and get a token.
/login - This is a POST call. To get a token with email and password.
/me - This is a GET call. To get information of the User.
/authorized_post_request - This is a POST call. To test POST requests which requires token.

## Database Model Chart

https://app.lucidchart.com/invitations/accept/38f0d764-0edc-49ea-b6c4-6907c910f135
