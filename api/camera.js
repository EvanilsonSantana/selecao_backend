const express = require('express')
const router = express.Router()
const { camera } = require('../models')


router.get('/', async(req, res) => {
    const cameras = await camera.findAll()
    res.json(cameras);
})

router.post('/', async (req, res) => {
    const { ip, usuario } = req.body
    await camera.create({ ip, usuario })
    res.send('Dado add com sucesso')
})


module.exports = router
