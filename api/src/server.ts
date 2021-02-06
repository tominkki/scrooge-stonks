import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/type-defs';
import resolvers from './graphql/resolvers';

const app = express();

const grapqlServer = new ApolloServer({
  typeDefs,
  resolvers
});

grapqlServer.applyMiddleware({ app, path: '/api/graphql' });

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log(`GraphQl server ready at localhost:3000${grapqlServer.graphqlPath}`);
});
