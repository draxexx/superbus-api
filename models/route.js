"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Route.belongsTo(models.BusStop, {
        foreignKey: "departureBusStopId",
        as: "departureBusStop",
      });

      Route.belongsTo(models.BusStop, {
        foreignKey: "arrivalBusStopId",
        as: "arrivalBusStop",
      });

      Route.hasMany(models.RoutineBusStop, {
        foreignKey: "routeId",
        as: "routes",
      });

      Route.belongsToMany(models.Route, {
        through: models.RoutineBusStop,
        foreignKey: "routeId",
        as: "routines",
      });
    }
  }
  Route.init(
    {
      departureBusStopId: {
        type: DataTypes.STRING(4),
        references: {
          model: "BusStops", // table name that will be associated
          key: "id", // target table key
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      arrivalBusStopId: {
        type: DataTypes.STRING(4),
        references: {
          model: "BusStops", // table name that will be associated
          key: "id", // target table key
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      price: {
        type: DataTypes.DOUBLE(6, 2),
      },
    },
    {
      sequelize,
      modelName: "Route",
    }
  );
  return Route;
};
