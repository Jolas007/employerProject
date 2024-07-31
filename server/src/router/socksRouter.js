const express = require("express");
const { Sock, Color, Pattern, Image } = require("../../db/models");
const socksRouter = express.Router();

socksRouter.route("/").get(async (req, res) => {
  try {
    const socks = await Sock.findAll();
    res.status(200).json(socks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

socksRouter.route("/colors").get(async (req, res) => {
  try {
    const allColor = await Color.findAll();
    res.status(200).json(allColor);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

socksRouter.route("/patterns").get(async (req, res) => {
  try {
    const allPatterns = await Pattern.findAll();
    res.status(200).json(allPatterns);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

socksRouter.route("/images").get(async (req, res) => {
  try {
    const allImages = await Image.findAll();
    res.status(200).json(allImages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
socksRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const sock = await Sock.findAll({ where: { userId: id } });

    res.status(200).json(sock);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

socksRouter.route("/colors/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const oneColors = await Color.findByPk(id);
    res.status(200).json(oneColors);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

socksRouter.route("/patterns/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const onePattern = await Pattern.findByPk(id);
    res.status(200).json(onePattern);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
socksRouter.route("/images/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const oneImage = await Image.findByPk(id);
    res.status(200).json(oneImage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = socksRouter;
