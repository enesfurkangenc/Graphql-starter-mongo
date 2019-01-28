const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  user_id: {
    type: Schema.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('message', messageSchema);