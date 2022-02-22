const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Passei no checklists')
    res.send()
})

module.exports = router