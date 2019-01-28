import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', function crypto(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    });
  return true;
});

const user = mongoose.model('user', userSchema);
export default user;
