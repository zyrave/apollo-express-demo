import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './api/schema';
import resolvers from './api/resolvers';

const PORT = 4000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:4000`));
