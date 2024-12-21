import { validationResult } from 'express-validator';
import createError from 'http-errors';

export const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validations
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, 'Validation Error', { errors: errors.array() }));
    }
    next();
  };
};
