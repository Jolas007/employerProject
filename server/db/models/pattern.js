"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    static associate({ Sock }) {
      this.hasMany(Sock, { foreignKey: "patternId" });
    }
  }
  Pattern.init(
    {
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Pattern",
    }
  );
  return Pattern;
};
