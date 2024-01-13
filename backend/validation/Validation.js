const { check, validationResult } = require("express-validator");

exports.userValidation = [
    check('name').notEmpty().isLength({ min: 2 }),
    check('location').isLength({ min: 2 }),
    check('email').isEmail(),
    check('password', 'incorrect password').isLength({ min: 8 })
]

exports.validation = (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    else {
        return res = next()
    }
}