"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Routine.hasMany(models.Tour, {
        foreignKey: "routineId",
        as: "routine",
      });
      Routine.hasMany(models.RoutineBusStop, {
        foreignKey: "routineId",
        as: "routines",
      });
      Routine.belongsToMany(models.Route, {
        through: models.RoutineBusStop,
        foreignKey: "routineId",
        as: "routes",
      });
    }
  }
  Routine.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Routine",
    }
  );
  return Routine;
};
