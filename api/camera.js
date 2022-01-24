const express = require('express')
const router = express.Router()
const { dados_camera } = require('../models')


router.get('/', async (req, res, next) => {
    const cameras = await dados_camera.findAll()
    res.status(200).json(cameras);
})

router.get('/:id', async(req, res) => {
    const cameras = await dados_camera.findAll()
    const dados_camera = await dados_camera.findByPk(req.params.id)
    res.json(cameras);  
})

router.post('/', async (req, res) => {
    const { id, ip, usuario, modelo, data_instalacao, contagem } = req.body
    const newCamera = dados_camera.create({ id, ip, usuario, modelo, data_instalacao, contagem })
    res.status(200).json(newCamera)
    
})


module.exports = router
