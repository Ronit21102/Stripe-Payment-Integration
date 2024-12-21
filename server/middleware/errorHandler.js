import createError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error(err.stack);

  // If the error is not an HttpError, convert it
  if (!err.status) {
    err = createError(500, err.message);
  }

  res.status(err.status).json({
    error: {
      status: err.status,
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};
