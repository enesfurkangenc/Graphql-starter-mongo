export default {
  createMessage: async (parent, { data: { text, user_id } }, { Message, pubsub }) => {
    try {
      const newMessage = await new Message({
        text,
        user_id,
      }).save();
      pubsub.publish('message sended', {
        messageSended: newMessage,
      });
      return newMessage;
    } catch (error) {
      throw new Error(error);
    }
  },
};
