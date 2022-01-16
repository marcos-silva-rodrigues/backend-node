const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = {
  secretOrKey: '7987a2df95a8c45858b39c39a5a8d885',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}