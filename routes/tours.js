const express = require("express");
const router = express.Router();

const { Routine, Route, Tour } = require("../models");
const generateId = require("../helpers/generateId");

// gets all tours
router.get("/", async (req, res, next) => {
  try {
    const tours = await Tour.findAll({
      attributes: { exclude: ["routineId", "createdAt", "updatedAt"] },
      include: [
        {
          model: Routine,
          as: "routine",
          attributes: ["id", "name"],
          include: [
            {
              model: Route,
              as: "routes",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
      order: [["date", "ASC"]],
    });
    return res.json(tours);
  } catch (error) {
    next(error);
  }
});

// create new tour
router.post("/", async (req, res, next) => {
  const id = generateId(6);
  try {
    const createdTour = await Tour.create({
      id: id,
      routineId: req.body.routineId,
      date: req.body.date,
    });
    const tour = await Tour.findOne({
      where: {
        id: createdTour.id,
      },
      attributes: { exclude: ["routineId", "createdAt", "updatedAt"] },
      include: [
        {
          model: Routine,
          as: "routine",
          attributes: ["id", "name"],
          include: [
            {
              model: Route,
              as: "routes",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    return res.status(201).json(tour);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
