import bcrypt from 'bcrypt';
import token from '../../../helpers/token';

export default {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (user) {
      throw new Error('User already exists.');
    }

    const newUser = await new User({
      username,
      password,
    }).save();

    return newUser;
  },

  signIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Böyle bir kullanıcı mevcut degil!');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Şifrenizi kontrol ediniz.');
    }
    return { token: token.generate(user, '1h') };
  },
};
