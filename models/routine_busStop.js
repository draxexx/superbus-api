"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RoutineBusStop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoutineBusStop.belongsTo(models.Routine, {
        foreignKey: "routineId",
        as: "routine",
      });
      RoutineBusStop.belongsTo(models.Route, {
        foreignKey: "routeId",
        as: "route",
      });
    }
  }
  RoutineBusStop.init(
    {
      routineId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Routines", // table name that will be associated
          key: "id", // target table key
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      routeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Routes", // table name that will be associated
          key: "id", // target table key
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      departureTime: {
        type: DataTypes.DATE,
      },
      arrivalTime: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "RoutineBusStop",
    }
  );
  return RoutineBusStop;
};
