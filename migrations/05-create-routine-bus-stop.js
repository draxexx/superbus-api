"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "RoutineBusStops",
        {
          routineId: {
            type: Sequelize.INTEGER,
            references: {
              model: "Routines", // table name that will be associated
              key: "id", // target table key
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          routeId: {
            type: Sequelize.INTEGER,
            references: {
              model: "Routes", // table name that will be associated
              key: "id", // target table key
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          departureTime: {
            type: Sequelize.DATE,
          },
          arrivalTime: {
            type: Sequelize.DATE,
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
    await queryInterface.dropTable("RoutineBusStops");
  },
};
