"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate({ Sock }) {
      this.hasMany(Sock, { foreignKey: "colorId" });
    }
  }
  Color.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Color",
    }
  );
  return Color;
};
