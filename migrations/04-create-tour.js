"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Tours",
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING(6),
          },
          routineId: {
            type: Sequelize.INTEGER,
            references: {
              model: "Routines", // table name that will be associated
              key: "id", // target table key
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          date: {
            type: Sequelize.DATE,
            defaultValue: new Date(),
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
    await queryInterface.dropTable("Tours");
  },
};
