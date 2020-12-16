const jwt = require('jsonwebtoken');


const SECRETKEY = 'somesecret';

const signToken = (obj) => {
    return new Promise((resolve, reject) => {
         jwt.sign(obj , SECRETKEY,  (err, token) => {
            if (err)  {
                return reject(err);
            }
            return resolve(token);
        });
    })
}

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({code: 'error', message: 'No Token'});
    }
    jwt.verify(req.headers.authorization , SECRETKEY, (err, verify) => {
        if (err) {
            winstonLogger.debug(err.message);
            winstonLogger.log('error', err);
            return res.status(500).json({success: 'Error', message: 'Error'});
        }
        req.user = verify;
        next();
    });
}

module.exports = {
    signToken: signToken,
    verifyToken: verifyToken
}