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

| Method | Path                       | Purpose                                | required parameters                                           | auth |
| ------ | -------------------------- | -------------------------------------- | ------------------------------------------------------------- | ---- |
| GET    | '/'                        | Test if your server is running         | none                                                          | no   |
| POST   | '/echo'                    | Test POST requests                     | none                                                          | no   |
| POST   | '/signup'                  | Create a new user and get a token      | email, name, password                                         | no   |
| POST   | '/login'                   | Get a token with email & password      | email, password                                               | no   |
| GET    | '/me'                      | Get information of this user           | none                                                          | yes  |
| POST   | '/authorized_post_request' | Test POST requests (token required)    | none                                                          | yes  |
| GET    | '/dogs'                    | Retrieve all dogs from database        | none                                                          | no   |
| GET    | '/dogs/:id'                | Retrieve dog details based on ID       | id                                                            | no   |
| POST   | '/adopter'                 | Insert adopter details to the database | name,email,phone,address,city,province,postcode,country,dogId | yes  |

## Database Model Chart

https://app.lucidchart.com/documents/view/625c0512-7f83-4859-9ca6-97cecceff229/0_0
