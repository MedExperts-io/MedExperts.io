const {
  models: { User },
} = require("../db");


const getToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // const token = window.localStorage.getItem("token");
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: "Forbidden" });
  else next();
};

module.exports = {
  getToken,
  isAdmin,
};
