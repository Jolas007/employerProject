"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Patterns", [
      {
        name: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="red" />
  <circle cx="150" cy="50" r="40" fill="green" />
  <circle cx="50" cy="150" r="40" fill="blue" />
  <circle cx="150" cy="150" r="40" fill="orange" />
</svg>
`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="60" height="60" fill="purple" />
        <rect x="80" y="10" width="60" height="60" fill="cyan" />
        <rect x="10" y="80" width="60" height="60" fill="magenta" />
        <rect x="80" y="80" width="60" height="60" fill="yellow" />
      </svg>`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="10" x2="190" y2="10" stroke="black" stroke-width="4" />
  <line x1="10" y1="50" x2="190" y2="50" stroke="red" stroke-width="4" />
  <line x1="10" y1="90" x2="190" y2="90" stroke="green" stroke-width="4" />
  <line x1="10" y1="130" x2="190" y2="130" stroke="blue" stroke-width="4" />
</svg>
`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 190,190 10,190" fill="orange" />
  <polygon points="50,50 150,50 100,150" fill="lightblue" />
  <polygon points="100,100 150,150 50,150" fill="pink" />
  <polygon points="120,30 180,150 60,150" fill="lightgreen" />
</svg>
`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 190,190 10,190" fill="orange" />
  <polygon points="50,50 150,50 100,150" fill="lightblue" />
  <polygon points="100,100 150,150 50,150" fill="pink" />
  <polygon points="120,30 180,150 60,150" fill="lightgreen" />
</svg>
`,
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
