"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("RoutineBusStops", [
      {
        routineId: 1,
        routeId: 1,
        departureTime: "2022-07-20T09:00:00Z",
        arrivalTime: "2022-07-20T11:00:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 1,
        routeId: 5,
        departureTime: "2022-07-20T11:10:00Z",
        arrivalTime: "2022-07-20T12:35:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 1,
        routeId: 8,
        departureTime: "2022-07-20T12:45:00Z",
        arrivalTime: "2022-07-20T13:10:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 1,
        routeId: 10,
        departureTime: "2022-07-20T13:20:00Z",
        arrivalTime: "2022-07-20T14:35:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 2,
        routeId: 1,
        departureTime: "2022-07-20T15:00:00Z",
        arrivalTime: "2022-07-20T17:00:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 2,
        routeId: 5,
        departureTime: "2022-07-20T17:10:00Z",
        arrivalTime: "2022-07-20T18:35:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 2,
        routeId: 8,
        departureTime: "2022-07-20T18:45:00Z",
        arrivalTime: "2022-07-20T19:10:00Z",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routineId: 2,
        routeId: 10,
        departureTime: "2022-07-20T19:20:00Z",
        arrivalTime: "2022-07-20T20:35:00Z",
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
