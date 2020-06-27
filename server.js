var express = require("express");
var path = require("path");
const expressSession = require("express-session");
var dotenv = require("dotenv");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");
var authRouter = require("./routes/auth");
var transactionRouter = require("./routes/transaction");
var userRouter = require("./routes/user");

dotenv.config();

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:8080/callback"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

const app = express();
const PORT = process.env.PORT || "8080";

app.set("views", path.join(__dirname, "build"));
app.use(express.static(path.join(__dirname, "build")));

// config express-session
const session = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

// You can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Creating custom middleware with Express
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use("/", authRouter);
app.use("/api/", transactionRouter);
app.use("/user/", userRouter);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

module.exports = app;
