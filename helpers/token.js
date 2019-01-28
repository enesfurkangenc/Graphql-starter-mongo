import jwt from 'jsonwebtoken';

const token = {
  generate: ({ username }, expiresIn) => jwt.sign({
    username,
  }, process.env.SECRET_KEY, { expiresIn }),
};

export default token;
