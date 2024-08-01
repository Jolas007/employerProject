const express = require("express");
const { Cart } = require("../../db/models");
const { verifyAccessToken } = require("../middleware/verifyTokens");
const cartRouter = express.Router();

cartRouter.route("/").get(async (req, res) => {
  try {
    const allItemsInCart = await Cart.findAll();
    res.status(200).json(allItemsInCart);
  } catch (err) {}
});

cartRouter.route("/add").post(verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  const { counter } = req.body;
  const userId = res.locals.user.id;
  try {
    const cartItem = await Basket.findOne({ where: { userId, sockId: id } });
    if (cartItem) {
      basketItem.count += counter;
      await cartItem.save();
    } else {
      await Cart.create({ userId, sockId: id, count: counter });
    }
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});

cartRouter.route("/delete.:id").delete(verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findOne({ where: { id } });
    if (cartItem) {
      await cartItem.destroy();
      res.status(200).json({ message: "Товар удалён из корзины" });
    } else {
      res.status(404).json({ error: "Товар не найден в корзине" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении товара из корзины" });
  }
});

module.exports = cartRouter;
