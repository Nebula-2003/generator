const jwt = require("jsonwebtoken");
const commonResponse = require("./commonResponse");
const Users = require("../services/users/users.model");

const createToken = (user, type = "user") => {
  let payload = {
    id: user._id.toString(),
    role: user.role
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRE_JWT_SECRET || "30d",
  });
  payload.token = token;
  return payload;
};

const verifyJWT = (req, res) => {
  try {
    const token = req.headers.authorization.replace("Bearer", "").trim();
    console.log(token);
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userInfo;
    return 1;
  } catch (error) {
    return 0;
  }
};

const isAuthorized = (users) => async (req, res, next) => {
    const isVerify = verifyJWT(req, res);
    console.log("Users : ",users);
    if (isVerify) {
      if (users.indexOf("landlord") > -1 && req.user.role == 'landlord') {
        const user = await Users.findById({_id: req.user.id});
        if (!user) {
          commonResponse.unAuthentication(res, {}, "USER_NOT_FOUND");
        } else {
          next();
        }
      } else if (users.indexOf("tenant") > -1 && req.user.role == 'tenant') {
        const user = await Users.findById({_id: req.user.id});
        if (!user) {
          commonResponse.unAuthentication(res, {}, "USER_NOT_FOUND");
        } else {
          next();
        }
      } else if (users.indexOf("admin") > -1 && req.user.role == 'admin') {
        const user = await Users.findById({_id: req.user.id});
        if (!user) {
          commonResponse.unAuthentication(res, {}, "USER_NOT_FOUND");
        } else {
          next();
        }
      } else {
        console.log('not allowed');
        commonResponse.unAuthentication(res, {}, "REQUEST_NOT_ALLOWED", 403);
      }
    } else {
      return commonResponse.unAuthentication(res, {}, "SESSION_EXPIRED");
    }
};

module.exports = {
  createToken,
  isAuthorized,
};
