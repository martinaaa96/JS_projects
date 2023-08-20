const jwt = require('../lib/jsonwebtoken');

const SECRET = 'Somesecretsecret';

exports.authentication = () => async (req, res, next) => {

    const token = req.header('X-Authorization');

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;

            res.locals.user = decodedToken;

        } catch (error) {


            return res.status(401).json({ ok: false });
        }
    }

    next();

}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login');

    }
    next();

}