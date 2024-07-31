"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Colors", [
      {
        name: "#990000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#FFFF00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#009900",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#FFFFFF",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#000000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#666666",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#00FFFF",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#660099",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "#FF66FF",
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
