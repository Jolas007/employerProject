"use strict";

const pattern = require("../models/pattern");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Socks", [
      {
        colorId: 2,
        patternId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        colorId: 1,
        patternId: 2,
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
