import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import dotenv from 'dotenv';

// resolvers ..
import resolvers from './graphql/resolvers';

// Models
import User from './models/User';
import Message from './models/Message';

// load env files
dotenv.config();

const server = new ApolloServer({
  typeDefs: importSchema('./graphql/schema.graphql'),
  resolvers,
  context: {
    User,
    Message,
  },
});

const app = express();
const morganMiddleware = morgan((tokens, req, res) => [
  '\n',
  chalk.hex('#ff4757').bold('Morgan --> '),
  chalk.hex('#34ace0').bold(tokens.method(req, res)),
  chalk.hex('#ffb142').bold(tokens.status(req, res)),
  chalk.hex('#ff5252').bold(tokens.url(req, res)),
  chalk.hex('#2ed573').bold(`${tokens['response-time'](req, res)} ms`),
  chalk.hex('#f78fb3').bold(`@ ${tokens.date(req, res)}`),
  chalk.yellow(tokens['remote-addr'](req, res)),
  chalk.hex('#fffa65').bold(`from ${tokens.referrer(req, res)}`),
  chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
].join(' '));
app.use(morganMiddleware);

// database connection
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log(chalk.green.bold(' 🌈  MongoDB Connected..')))
  .catch(e => console.log(chalk.red.bold(e)));
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => {
  (console.log(chalk.red.bold(` 🦄  Server ready at http://localhost:4001${server.graphqlPath}`)));
});
