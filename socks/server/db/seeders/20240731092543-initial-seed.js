'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Создание пользователей
    const users = await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'john@example.com',
          password: await bcrypt.hash('password123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: await bcrypt.hash('password123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true },
    );

    // Создание носок
    const socks = await queryInterface.bulkInsert(
      'Socks',
      [
        {
          color: 'Red',
          pattern: 'Striped',
          image: 'https://example.com/images/red-striped.png', // Замените на реальную ссылку
          price: 19.99,
          size: 'M',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: 'Blue',
          pattern: 'Polka Dot',
          image: 'https://example.com/images/blue-polka-dot.png', // Замените на реальную ссылку
          price: 14.99,
          size: 'L',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true },
    );
    // Создание избранных
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1,
        sockId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        sockId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Создание корзин
    await queryInterface.bulkInsert('Baskets', [
      {
        userId: 1,
        sockId: 1,
        count: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        sockId: 2,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Удаление данных
    await queryInterface.bulkDelete('Baskets', null, {});
    await queryInterface.bulkDelete('Favorites', null, {});
    await queryInterface.bulkDelete('Socks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
