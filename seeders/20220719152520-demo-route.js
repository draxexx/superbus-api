"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Routes", [
      {
        departureBusStopId: "ANKR",
        arrivalBusStopId: "BOLU",
        price: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "ANKR",
        arrivalBusStopId: "SKRY",
        price: 170,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "ANKR",
        arrivalBusStopId: "IZMT",
        price: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "ANKR",
        arrivalBusStopId: "ISTN",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "BOLU",
        arrivalBusStopId: "SKRY",
        price: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "BOLU",
        arrivalBusStopId: "IZMT",
        price: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "BOLU",
        arrivalBusStopId: "ISTN",
        price: 190,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "SKRY",
        arrivalBusStopId: "IZMT",
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "SKRY",
        arrivalBusStopId: "ISTN",
        price: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departureBusStopId: "IZMT",
        arrivalBusStopId: "ISTN",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
