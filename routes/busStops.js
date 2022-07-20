const express = require("express");
const router = express.Router();

const { BusStop } = require("../models");
const generateId = require("../helpers/generateId");

// gets all busStops
router.get("/", async (req, res, next) => {
  try {
    const busStops = await BusStop.findAll({ attributes: ["id", "name"] });
    return res.json(busStops);
  } catch (error) {
    next(error);
  }
});

// gets single busStop
router.get("/:id", async (req, res, next) => {
  try {
    const busStops = await BusStop.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "name"],
    });
    return res.json(busStops);
  } catch (error) {
    next(error);
  }
});

// create new busStop
router.post("/", async (req, res, next) => {
  const id = generateId(4);
  try {
    const createdBusStop = await BusStop.create({
      id: id,
      name: req.body.name,
    });
    const busStop = await BusStop.findOne({
      where: {
        id: createdBusStop.id,
      },
    });
    return res.status(201).json(busStop);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
