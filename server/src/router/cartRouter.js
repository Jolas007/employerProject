const express = require("express");
const { Cart, User } = require("../../db/models");
const { verifyAccessToken } = require("../middleware/verifyTokens");
const cart = require("../../db/models/cart");
const cartRouter = express.Router();

cartRouter.route("/").get(async (req, res) => {
  //получение содержимого корзины
  try {
    const allItemsInCart = await Cart.findAll();
    res.status(200).json(allItemsInCart);
  } catch (err) {}
});

cartRouter.route("/update/:id").post(async (req, res) => {
  const { sockId, counter } = req.body;
  const userId = req.params.id;
  if (!sockId || counter == null) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    let cartItem = await Cart.findOne({
      where: {
        userId: userId,
        ordersId: ordersId,
      },
    });
    if (cartItem) {
      cartItem.counter += counter;
      await Cart.save();
    } else {
      await Basket.create({
        userId: userId,
        ordersId: ordersId,
        quantity: quantity,
      });
    }
    const cartItems = await Basket.findAll({
      where: { userId },
    });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});

module.exports = cartRouter;
