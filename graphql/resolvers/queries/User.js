const User = {
  message: async (parent, args, { Message }) => {
    return await Message.find({ user_id: parent._id});
  }
};

module.exports = User;