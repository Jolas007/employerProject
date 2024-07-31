const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sockRouter = require('./routes/sock.router');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/socks', sockRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);

module.exports = app;
