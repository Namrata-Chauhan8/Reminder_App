const User = require("../model/User");
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("---------"+token);
    console.log("Cookies:", req.cookies);

    if (!token) {
      return res.status(500).json({ msg: "Not authorized, please login" ,type:"error"});
    }
    
    const verified = jwt.verify(token, "thisIsSecretKey");

    User.findById(verified.id).select("-password ")
      .then((user) => {
        if (!user) {
          res.status(500);
          throw new Error({ msg: "Not authorized, please login" ,type:"error"});
        }
        req.user = user;
        next();
      })
      .catch((error) => {
        res.status(500);
        throw new Error({ msg: "Not authorized, please login" ,type:"error"});
      });
  } catch (error) {
    res.status(500);
    throw new Error({ msg: "Not authorized, please login" ,type:"error"});
  }
};



module.exports = { protect };


 