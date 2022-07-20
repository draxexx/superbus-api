const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;

// routes
const routines = require("./routes/routines");
const routes = require("./routes/busRoutes.js");
const busStops = require("./routes/busStops.js");
const tours = require("./routes/tours.js");
const routineBusStops = require("./routes/routineBusStops.js");

// middlewares
const { verifyToken } = require("./middlewares/verifyToken");
const { errorHandler } = require("./middlewares/errorHandler");

dotenv.config();

app.use(express.json());

// routes
app.use("/routines", routines);
app.use("/routes", routes);
app.use("/busStops", busStops);
app.use("/tours", verifyToken, tours);
app.use("/routineBusStops", routineBusStops);

// error handler
app.use(errorHandler);

module.exports = app;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
