const jwt = require('jsonwebtoken');
// Middleware to check JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Bearer <token>
    
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid token.");
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;