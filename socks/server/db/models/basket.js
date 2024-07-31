'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Sock }) {
      // Определяем ассоциации
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sock, { foreignKey: 'sockId' });
    }
  }

  Basket.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      sockId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Socks',
          key: 'id',
        },
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Basket',
    },
  );

  return Basket;
};
