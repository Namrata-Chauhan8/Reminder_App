// const User = require("../model/User");
// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     console.log("---------",token);
//     console.log("Cookies:", req.cookies);

//     if (!token) {
//       return res.status(401).json({ msg: "Not authorized, please login" ,type:"error"});
//     }
    
//     // Verify token
//     const verified = jwt.verify(token, "thisIsSecretKey");

//     // Get user id from token
//     User.findById(verified.id).select("-password ")
//       .then((user) => {
//         if (!user) {
//           res.status(500);
//           throw new Error({ msg: "Not authorized, please login" ,type:"error"});
//         }
//         req.user = user;
//         next();
//       })
//       .catch((error) => {
//         res.status(500);
//         throw new Error({ msg: "Not authorized, please login" ,type:"error"});
//       });
//   } catch (error) {
//     console.error("Error in protect middleware:", error);
//     res.status(500).json({ msg: "Not authorized, please login", type: "error" });
// }

// };



// module.exports = { protect };

// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401); // Unauthorized

//   jwt.verify(token, 'thisIsSecretKey', (err, user) => {
//     if (err) return res.sendStatus(403); // Forbidden
//     req.user = user;
//     next();
//   });
// };

// module.exports = { authenticateToken };


 