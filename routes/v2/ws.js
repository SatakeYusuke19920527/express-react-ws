const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const socket = require('socket.io')

const router = express.Router();

// router.get('/', function(req, res, next) {
//   res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "masalib"
//   }]);
// });

io.on('connection', (socket) => console.log(connect))

module.exports = router;