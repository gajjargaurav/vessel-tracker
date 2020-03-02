const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const customResolvers = require('./resolvers');
const DataStore = require('./dataStore');
const { createStore } = require('./utils');

const { DateTimeResolver, DateTimeTypeDefinition, } = require('graphql-scalars');

const store = createStore();

const dataSources = () => ({
    dataStore: new DataStore({ store }),
});
const typeDefs = [DateTimeTypeDefinition, schema];
const resolvers = [{ DateTime: DateTimeResolver }, customResolvers];
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
