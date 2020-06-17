module.exports = function () {
  return function secured (req, res, next) {
    console.log("secured req.user")
    console.log(req.user)
    if (req.user) { return next(); }
    res.send( 401 );
  };
};