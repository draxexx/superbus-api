const errorHandler = (err, req, res, next) => {
  let message;
  const status = err.status;

  console.log("CATCHED ERROR: ", err);

  if (err.status === 400) {
    message = "Request format is not API expects";
  } else if (err.status === 401) {
    message = "Unauthorized access";
  } else if (err.status === 404) {
    message = "Requested resource not found";
  } else {
    message = "Server error";
  }

  res.status(status || 500).json({
    status: status || 500,
    message: message,
  });
};

module.exports = { errorHandler };
