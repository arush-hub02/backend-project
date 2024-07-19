const asyncHandler = (responseHandler) => {
  (req, res, next) => {
    Promise.resolve(responseHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//other way

// Higher order function

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
