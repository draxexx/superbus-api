"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BusStops",
      [
        {
          id: "ANKR",
          name: "Ankara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "BOLU",
          name: "BOLU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "SKRY",
          name: "Sakarya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "IZMT",
          name: "İzmit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ISTN",
          name: "İstanbul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
