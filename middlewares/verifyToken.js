const verifyToken = (req, res, next) => {
  // get token from the headers
  const authHeader = req.headers.token;
  // if token exist
  if (authHeader === process.env.API_KEY) {
    next();
  } else {
    return res.status(401).json("You have not permission to access!");
  }
};

module.exports = { verifyToken };
