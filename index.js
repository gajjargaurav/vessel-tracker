const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const DataStore = require('./dataStore');
const { createStore } = require('./utils');

const store = createStore();

const dataSources = () => ({
    dataStore: new DataStore({ store }),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
