Take home challenge for obierisk.com

# Setup

## Api

This folder contains the api that is needed to interact with the application.

### Database Config

/api/knexfile.js

- setup the connection to your local environment. I use MySQL.

### Run

After database is added to local environment run in terminal

- cd api
- npm install
- npm run db:migrate
- npm run db:seed
- npm start

If done correctly you will see a graphiql interface on http://localhost:4000/graphql

## Front-end

This folder contains a react application

- Run cd front-end
- Run npm install
- Run npm start

This will be running on http://localhost:3000
