const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./router/userRouther");
const authRouter = require("./router/authRouter");
const tokenRouter = require("./router/tokensRouter");
const socksRouter = require("./router/socksRouter");
const cartRouter = require("./router/cartRouter");
const favoriteRouter = require("./router/favoriteRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/socks", socksRouter);
app.use("/api/auth", authRouter);
app.use("/api/tokens", tokenRouter);
app.use("/api/cart", cartRouter);
app.use("/api/favorite", favoriteRouter);

module.exports = app;
