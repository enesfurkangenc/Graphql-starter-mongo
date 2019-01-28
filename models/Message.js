import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  user_id: {
    type: Schema.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const message = mongoose.model('message', messageSchema);
export default message;
