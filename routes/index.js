const express = require('express');
const usersRouter = require('./v1/users');
const wsRouter = require('./v2/ws');

const router = express.Router();

// v1以下のルーティング
router.use('/users', usersRouter);
router.use('/ws', wsRouter);

module.exports = router;