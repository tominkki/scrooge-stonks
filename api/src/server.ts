import http from 'http';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/type-defs';
import resolvers from './graphql/resolvers';
import { uploadRouter } from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRouter);

const grapqlServer = new ApolloServer({
  typeDefs,
  resolvers
});

grapqlServer.applyMiddleware({ app, path: '/api/graphql' });

export default http.createServer(app);
