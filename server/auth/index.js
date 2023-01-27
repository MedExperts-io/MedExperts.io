const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { getToken } = require("../api/userCheckMiddleware");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    //Security2: Prrotecting against injection attacks in Sequelize via Insomnia/Postman (can't make isAdmin true)
    const { firstName, lastName, email, password, expertise, school } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      expertise,
      school,
    });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

router.put("/profile", getToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);

    //Security2: Prrotecting against injection attacks in Sequelize via Insomnia/Postman (can't make isAdmin true)
    const { firstName, lastName, email, expertise } = req.body;
    const editUserDetails = await user.update({
      firstName,
      lastName,
      email,
      expertise,
    });

    res.json(editUserDetails);
  } catch (err) {
    next(err);
  }
});
