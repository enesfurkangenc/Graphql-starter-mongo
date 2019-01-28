// Query resolvers
const Query = require('./queries/Query');
const Message = require('./queries/Message');
const User = require('./queries/User');

// Mutation resolvers
const Mutation = require('./mutations');

module.exports = {
  Query,
  Message,
  User,
  Mutation,
};
