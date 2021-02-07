const express = require('express')
const router = express.Router()

const links = [
    {
        id: 'GitHub',
        url: 'https://github.com/T0xicTyler'
    },
    {
        id: 'LinkedIn',
        url: 'https://linkedin.com/in/tyler-grissom'
    },
    {
        id: "LinkTree",
        url: 'https://linktr.ee/t0xictyler'
    },
    {
        id: 'Twitter',
        url: 'https://twitter.com/t0xictyler'
    },
    {
        id: 'Instagram',
        url: 'https://instagram.com/t0xictyler'
    },
    {
        id: 'Twitch',
        url: 'https://twitch.tv/t0xictyler'
    }
]

router.get('/link(s)?', (req, res) => res.render('links'))
router.get('/link(s)?/:linkId', (req, res) => {
    let linkId = req.params.linkId

    let link

    for (let i = 0; i < links.length; i++) {
        if (links[i].id.toLowerCase() === linkId.toLowerCase()) {
            link = links[i]
            res.redirect(link.url)
        }
    }

    if (link == null) {
        res.redirect('/')
    }
})

module.exports = router
