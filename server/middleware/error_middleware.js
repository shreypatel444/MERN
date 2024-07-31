const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 423;
    const message = err.message || "Backend Message";
    const ExtraDetails = err.ExtraDetails || "Backend ExtraDetails"

    return res.status(status).json({message,ExtraDetails});
}

module.exports = errorMiddleware;