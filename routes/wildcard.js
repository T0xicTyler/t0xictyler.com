const express = require('express')
const router = express.Router()

/* Catch everything else */
router.get('*', (req, res) => res.redirect('/'))

module.exports = router