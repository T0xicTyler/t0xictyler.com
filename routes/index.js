const express = require('express')
const router = express.Router()
const data = {
    title: 'T0xicTyler',
    server_ip: 'potterplus.mc.gg'
}

/* GET home page. */
router.get('/', (req, res) => res.render('index', data))
router.get('*', (req, res) => res.redirect('/'))

module.exports = router