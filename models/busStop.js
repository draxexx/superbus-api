"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BusStop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BusStop.hasMany(models.Route, {
        foreignKey: "departureBusStopId",
        as: "departureBusStop",
      });

      BusStop.hasMany(models.Route, {
        foreignKey: "arrivalBusStopId",
        as: "arrivalBusStop",
      });
    }
  }
  BusStop.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(4),
        set(value) {
          this.setDataValue("id", value);
        },
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "BusStop",
    }
  );
  return BusStop;
};
