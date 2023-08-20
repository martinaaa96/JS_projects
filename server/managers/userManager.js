const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');
const User = require('../models/User');

const SECRET = 'Somesecretsecret';

exports.login = async (username, password) => {
    const user = await User.find({ username });

    if (!user) {
        throw new Error('Invalid username or password');

    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    const payload = {
        _id: user._id,
        username: user.username,

    }
    const token = await jwt.sign(payload, SECRET);

    return token;

}


exports.register = async (username, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch');

    }
    const existingUser = await User.findOne({ username });


    if (existingUser) {
        throw new Error('User exists');

    }
    if (password.length < 4) {
        throw new Error('Password too short');

    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({ username, password: hashedPassword });

    return this.login(email, password);


}