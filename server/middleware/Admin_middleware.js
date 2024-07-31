const adminMiddleware = async(req,res,next) => {
    try {
        const isAdmin = req.body.isAdmin;
        if(isAdmin == "false"){
            res.json({message : "You are not an Admin..."});
        }
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware;