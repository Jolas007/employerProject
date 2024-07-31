'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Basket, Favorite }) {
      // Определяем ассоциации
      this.hasMany(Basket, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  return User;
};