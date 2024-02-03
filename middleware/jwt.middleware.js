// Importing necessary file, module and package , and creating instances of them
import "../env.js";
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Read the token
  const token = req.headers["authorization"];
  console.log("This is your token : ", token);

  // If no token, return error
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  // check if token is valid or not
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(payload);
    req.userId = payload.userId;
  } catch (error) {
    // return err
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
  // call the next middleware
  next();
};

// Exporting jwtAuth
export default jwtAuth;
