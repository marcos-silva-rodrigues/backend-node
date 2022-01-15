const LocalStrategy = require('passport-local');
const User = require('../model/user');

module.exports = (passport) => {

  passport.serializeUser((user, cb) => {
    return cb(null, user._id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const hasUser = await User.findById(id);
      return cb(null, hasUser); 
    } catch (err) {
      return cb(err, {});
    }
  });

  passport.use('local-signup', new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password',
     passReqToCallback: true,
  }, 
    async (req, username, password, cb) => {
      try {
        const userExists = await User.findOne({ username });
        if(!userExists) {
          const user = new User(req.body);
          user.password = user.genHash(user.password);
      
          const userCreated = await user.save();
          return cb(null, userCreated);
        } 

        return cb(null, false);
      } catch (err) {
        return cb(err, false);
      }
    }
  ));


  passport.use('local-signin', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, cb) => {
      const userExists = await User.findOne({ username });
      console.log(userExists)
      if(!userExists) return cb(null, false);

      userExists.validPassord(password, (err, result) => {
        if(!result || err) return cb(null, false);
        console.log("User Valido");
        return cb(null, userExists);
      })

    }
  ));
}