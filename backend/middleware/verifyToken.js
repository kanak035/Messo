const jwt = require("jsonwebtoken");
const SECRET_KEY = "mySecretKey"; // You should ideally store this in an environment variable

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Assumes the header is "Bearer token"

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid!" });
      }
      req.user = decoded; // Add the decoded user to the request object
      next(); // Proceed to the next middleware or route handler
    });
  } else {
    return res.status(401).json({ message: "You are not authenticated!" });
  }
};

module.exports = verifyToken; // Export the middleware
