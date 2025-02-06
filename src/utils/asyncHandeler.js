const asyncHandler = (requestHandler) => {
    return (req, res, next) => {  // ✅ RETURN the function
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));  // Pass errors to Express
    };
};

export { asyncHandler };

//thsi helps us to reduce the error handelling with try catch in every route 





// const asyncHandeler = (fn) => async (req,res, nxt) => {
//     try {
//         await fn(req,res,nxt);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })

//     }
// }
