"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Routes",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          departureBusStopId: {
            type: Sequelize.STRING(4),
            references: {
              model: "BusStops", // table name that will be associated
              key: "id", // target table key
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          arrivalBusStopId: {
            type: Sequelize.STRING(4),
            references: {
              model: "BusStops", // table name that will be associated
              key: "id", // target table key
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          price: {
            type: Sequelize.DOUBLE(6, 2),
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Routes");
  },
};
