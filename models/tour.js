"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tour.belongsTo(models.Routine, {
        foreignKey: "routineId",
        as: "routine",
      });
    }
  }
  Tour.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(6),
        set(value) {
          this.setDataValue("id", value);
        },
      },
      routineId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Routines", // table name that will be associated
          key: "id", // target table key
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "Tour",
    }
  );
  return Tour;
};
