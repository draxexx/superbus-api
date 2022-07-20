const express = require("express");
const router = express.Router();

const { Route, Tour } = require("../models");

// gets all routes
router.get("/", async (req, res, next) => {
  try {
    const routes = await Route.findAll();
    return res.json(routes);
  } catch (error) {
    next(error);
  }
});

// create new route
router.post("/", async (req, res, next) => {
  try {
    const createdRoute = await Route.create(req.body);
    const route = await Route.findByPk(createdRoute.id);
    return res.status(201).json(route);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
