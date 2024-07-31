"use strict";

const image = require("../models/image");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "1",
        email: "1@1",
        hashpass: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "2",
        email: "2@2",
        hashpass: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "3",
        email: "3@3",
        hashpass: "123",
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
