const Strategy = require('passport-local');


module.exports = function(passport) {
    passport.use(new Strategy(
        function(username, password, done) {
            // database dummy - find user and verify password
            if (username === 'devilsname' && password === '666') {
                // to req.user
                return done(null, {
                    id: 666,
                    firstname: 'devils',
                    lastname: 'name',
                    email: 'devil@he.ll',
                    verified: true
                });
            } else {
                return done(null, false);
            }
        }
    ));
}
