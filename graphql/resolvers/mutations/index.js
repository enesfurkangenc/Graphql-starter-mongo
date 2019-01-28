import User from './user.mutation';
import Message from './message.mutation';

const Mutation = {
  ...User,
  ...Message,
};

export default Mutation;
