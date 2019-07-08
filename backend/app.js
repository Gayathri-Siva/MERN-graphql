const express = require('express');
const bodyparser = require('body-parser');
const graphqlHttp = require('express-graphql');
const isAuth = require('./middleware/is-auth')
const mongoose = require('mongoose');
const config = require('./db');

const graphiqlQlSchema = require('./graphql/schema/index');
const graphiqlQlResolvers = require('./graphql/resolvers/index');




const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
app.use(isAuth);

app.use('/graphql', graphqlHttp({
schema:graphiqlQlSchema,
rootValue:graphiqlQlResolvers,
graphiql:true
}))
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
app.listen(8000);