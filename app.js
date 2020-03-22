const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require("cors");

const schema = require('./graphql/postSchemas');
const connectDB = require('./config/db');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: true
}));


// Database Connection
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));