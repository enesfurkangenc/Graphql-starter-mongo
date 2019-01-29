import { withFilter } from 'apollo-server-express';

export default {
  messageSended: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => pubsub.asyncIterator('message sended'),
      (payload, veriable) => (veriable.userId ? String(payload.messageSended.user_id) === veriable.userId : true),
    ),
  },
};
