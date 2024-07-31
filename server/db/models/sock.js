"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ Cart, Favorite, Color, Pattern, Image }) {
      this.hasMany(Cart, { foreignKey: "sockId" });
      this.hasMany(Favorite, { foreignKey: "sockId" });
      this.belongsTo(Color, { foreignKey: "colorId" });
      this.belongsTo(Pattern, { foreignKey: "patternId" });
      this.belongsTo(Image, { foreignKey: "imageId" });
    }
  }
  Sock.init(
    {
      colorId: DataTypes.INTEGER,
      patternId: DataTypes.INTEGER,
      imageId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sock",
    }
  );
  return Sock;
};
