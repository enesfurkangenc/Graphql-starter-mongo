module.exports = {
  createMessage: async (parent, { data: { text, user_id } }, { Message }) => {
    const newUser = await new Message({
      text,
      user_id,
    }).save();

    return newUser;
  },
};
