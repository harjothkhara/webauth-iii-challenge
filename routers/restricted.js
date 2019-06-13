const jwt = require('jsonwebtoken');
const secret = process.env.SECRET; // Require secrets so secrets can also be decoded 

// This middleware will restrict who can see certain pages 

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
         // defining the token 
        const token = req.headers.authorization;
        // Verify method verifies token, decodes secret, and also pass in a function
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                // Invalid token
                res.status(401).json({ message: "Invalid token" })
            } else {
                // Valid token 
                req.headers.department = decodedToken.department;
                next();
            }
        });
    } else {
        res.status(401).json({ message: "No token provided, invalid request" });
    }
};