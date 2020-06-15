/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const expressSession = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const Auth0Strategy = require("passport-auth0");
var indexRouter = require("./routes/routes");
var authRouter = require("./routes/auth")
require("dotenv").config();

const PORT = process.env.PORT;

/**
 * Passport Configuration
 */

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:8080/login"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());

/**
 * Session Configuration
 */

const session = {
  secret: "LoxodontaElephasMammuthusPalaeoloxodonPrimelephas",
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

app.use(expressSession(session));

app.use(passport.initialize());
app.use(passport.session());


// Creating custom middleware with Express
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
   console.log("req.isAuthenticated: ");
  console.log(res.locals.isAuthenticated); 
  if (req && req.query && req.query.error) {
    req.flash('error', req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash('error_description', req.query.error_description);
  }
  next();
});


// Router mounting
app.use("/api", indexRouter);
app.use("/auth", authRouter);



// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

module.exports = app;
