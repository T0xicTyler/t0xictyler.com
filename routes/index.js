const express = require('express');
const router = express.Router();
let data = {title: 'T0xicTyler', server_ip: 'potterplus.mc.gg'}

/* GET home page. */
router.get('/', (req, res) => res.render('index', data));

module.exports = router;
