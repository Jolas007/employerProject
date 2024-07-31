const sockRouter = require('express').Router();
const { Sock, User } = require('../../db/models');

sockRouter.route('/').get(async (req, res) => {
  try {
    const socks = await Sock.findAll();
    res.json(socks);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = sockRouter;
