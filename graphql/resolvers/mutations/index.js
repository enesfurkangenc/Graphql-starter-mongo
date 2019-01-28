const user = require('./user.mutation');
const message = require('./message.mutation');

const Mutation = {
  ...user,
  ...message,
};

module.exports = Mutation;
