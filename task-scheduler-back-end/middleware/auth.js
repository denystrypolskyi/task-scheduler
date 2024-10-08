const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Auth error" });
    }
    
    const decoded = jwt.verify(token, process.env.secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Auth error" });
  }
};