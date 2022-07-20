const { Router } = require("express");
const express = require("express");
const router = express.Router();

const { Route, Routine, RoutineBusStop } = require("../models");

// gets all routineBusStops
router.get("/", async (req, res, next) => {
  try {
    // const tourBusStops = await RoutineBusStop.findAll({
    //   include: [
    //     {
    //       model: Tour,
    //       as: "tour",
    //     },
    //     { model: BusStop, as: "departureBusStop" },
    //     { model: BusStop, as: "arrivalBusStop" },
    //   ],
    // });
    const routineBusStops = await RoutineBusStop.findAll({
      attributes: {
        exclude: ["id", "routineId", "routeId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Route,
          as: "route",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Routine,
          as: "routine",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    return res.json(routineBusStops);
  } catch (error) {
    next(error);
  }
});

// create new routineBusStop
router.post("/", async (req, res, next) => {
  try {
    const createdTourBusStop = await RoutineBusStop.create(req.body);
    const RoutineBusStop = await RoutineBusStop.findOne({
      where: {
        tourId: createdTourBusStop.tourId,
        departureBusStopId: createdTourBusStop.departureBusStopId,
        arrivalBusStopId: createdTourBusStop.arrivalBusStopId,
      },
    });
    return res.status(201).json(RoutineBusStop);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
