const { validationResult } = require('express-validator');

exports.login = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.data = errors.array();
        return res.json({ auth: false, message: error.data[0].msg });
    }
    const { username, password } = req.body;
    const dummyUser = {
        username: 'administrator',
        password: 'admin1234'
    };
    if (username === dummyUser.username) {
        if (password === dummyUser.password) {
            res.status(200).json({
                auth: true,
                message: 'Auth successful'
            });
        } else {
            res.json({
                auth: false,
                message: 'Auth failed'
            });
        }
    } else {
        res.json({
            auth: false,
            message: 'Auth failed'
        })
    }
}