'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ Basket, Favorite }) {
      // Определяем ассоциации
      this.hasMany(Basket, { foreignKey: 'sockId' });
      this.hasMany(Favorite, { foreignKey: 'sockId' });
    }
  }

  Sock.init(
    {
      color: DataTypes.STRING,
      pattern: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      size: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sock',
    },
  );

  return Sock;
};
