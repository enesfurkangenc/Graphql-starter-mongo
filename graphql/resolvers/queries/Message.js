const Message = {
  user: async (parent, args, { User }) => {
    const user = await User.findById(parent.user_id);
    return user;
  }
  ,
};

export default Message;
