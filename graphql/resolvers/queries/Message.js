const Message = {
  user: async (parent, args, { User }) => {
    return await User.findById(parent.user_id);
  }
};

module.exports = Message;