const JWT = require ('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
    const token = req.headers['authorization'].split("  ")[1];
    JWT.verify(token,process.env.JWT_SECRET,(err,decoded) => {
        if(err){
            res.status(201).send({
                success: false,
                message: 'Authentication failed'
            });
        }else{
            req.body.userId = decoded.id;
            next();
        }

    });
}
catch(err){
    res.status(401).send({
        success: false,
        message: 'Authentication failed'
    });
}
}
