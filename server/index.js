const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');

const url = `mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0.g0fxt.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const startServer = async () => {
  await mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .error(() => {
      console.error('Error while connecting to MongoDB');
    });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
