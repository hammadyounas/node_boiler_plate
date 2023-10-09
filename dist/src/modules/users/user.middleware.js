"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const express_validator_1 = require("express-validator");
exports.userValidator = [
    (0, express_validator_1.check)('FirstName', 'Please fill user name field.').not().isEmpty(),
    (0, express_validator_1.check)('LastName', 'Please fill user name field.').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Please enter valid email address').isEmail(),
    (0, express_validator_1.check)('password', 'Please enter your password').not().isEmpty(),
    (req, res, next) => {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            const err = new Error(error.errors[0].msg);
            err.statusCode = 422;
            err.data = error;
            return next(err);
        }
        next();
    },
];
