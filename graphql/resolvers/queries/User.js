const User = {
  message: async (parent, args, { Message }) => {
    const message = await Message.find({ user_id: parent._id });
    return message;
  },
};

export default User;
