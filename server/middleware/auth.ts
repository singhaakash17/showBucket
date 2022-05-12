require("dotenv").config(); 
import jwt from 'jsonwebtoken';


const verifyToken = (req:any, res:any, next:any) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({message:"A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token,process.env.TOKEN_KEY as string);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({message:"Invalid Token"});
  }
  return next();
};

module.exports = verifyToken;