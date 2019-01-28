const Query = {
  user: async (parent, args, { User }) => {
    const user = await User.findById(args.id);
    return user;
  },
  users: async (parent, args, { User }) => {
    const users = await User.find({}).sort({ createdAt: 'desc' });
    return users;
  },
  message: async (parent, args, { Message }) => {
    const message = await Message.findById(args.id);
    return message;
  },
  messages: async (parent, args, { Message }) => {
    const messages = await Message.find({}).sort({ createdAt: 'desc' });
    return messages;
  },
};

export default Query;
