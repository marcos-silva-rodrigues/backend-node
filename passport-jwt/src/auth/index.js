const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../schema/User");
const JwtConfig = require("./config");

module.exports = (passport) => {
  passport.use(
    "token",
    new JwtStrategy(JwtConfig, async (payload, cb) => {
      try {
        const userExists = await User.findById(payload.id).select({ name: 1, username: 1 });

        if (!userExists) return cb(null, false);
        return cb(null, userExists);
      } catch (err) {
        return cb(err, false);
      }
    })
  );
};
