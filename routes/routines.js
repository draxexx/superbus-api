const express = require("express");
const router = express.Router();

const { Routine } = require("../models");

// gets all routines
router.get("/", async (req, res, next) => {
  try {
    const routines = await Routine.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return res.json(routines);
  } catch (error) {
    next(error);
  }
});

// create new routine
router.post("/", async (req, res, next) => {
  try {
    const createdRoutine = await Routine.create(req.body);
    const routine = await Routine.findOne({
      where: {
        id: createdRoutine.id,
      },
    });
    return res.status(201).json(routine);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
