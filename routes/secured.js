exports.secured = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
  
      console.log("has access")
      return next();
    }
    console.log("Unauthorized - User not authenticated")
    //res.redirect("/notauthorized");
    res.status(401).send(`Unauthorized - User not authenticated`)
  };

  