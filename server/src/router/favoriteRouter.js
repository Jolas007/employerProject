const express = require("express");
const { Favorite } = require("../../db/models");
const { verifyAccessToken } = require("../middleware/verifyTokens");
const favoriteRouter = express.Router();

favoriteRouter.route("/").get(async (req, res) => {
  try {
    const allFavorite = await Favorite.findAll();
    res.status(200).json(allFavorite);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});
favoriteRouter.route("/add").post(verifyAccessToken, async (req, res) => {
  try {
    const { sockId } = req.body;
    const userId = res.locals.user.id;

    const existFavoriteItem = await Favorite.findOne({
      where: { userId, sockId },
    });
    if (existFavoriteItem) {
      return res.status(400).json({ error: "Товар уже добавлен в избранное" });
    }
    const newFavorite = await Favorite.create({ userId, sockId });
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в избранное" });
  }
});
favoriteRouter
  .route("/delete/:id")
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;
      const favoriteItem = await Favorite.findOne({ where: { id } });
      if (favoriteItem) {
        await favoriteItem.destroy();
        res.status(200).json({ message: "Товар удалён из корзины" });
      }
    } catch (error) {
      res.status(500).json({ error: "Ошибка при удалении товара" });
    }
  });

module.exports = favoriteRouter;
