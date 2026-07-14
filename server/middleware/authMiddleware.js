import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // Get token from request header
    const token = req.header("Authorization");

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided.",
      });
    }

    // Remove "Bearer " from token
    const jwtToken = token.replace("Bearer ", "");

    // Verify Token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Store user id in request
    req.user = decoded;

    // Continue to next function
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;