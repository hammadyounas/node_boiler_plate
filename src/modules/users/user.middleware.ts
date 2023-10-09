
import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

export const userValidator = [
    check('FirstName', 'Please fill user name field.').not().isEmpty(),
    check('LastName', 'Please fill user name field.').not().isEmpty(),
    check('email', 'Please enter valid email address').isEmail(),
    check('password', 'Please enter your password').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction): void => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const err = new Error((error as any).errors[0].msg);
        err.statusCode = 422;
        err.data = error;
        return next(err);
      }
      next();
    },
  ];