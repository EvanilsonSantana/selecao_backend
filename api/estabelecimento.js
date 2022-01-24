const express = require('express')
const router = express.Router()
const { estabelecimento } = require('../models')


router.get('/', async(req, res, next) => {
    const estabelecimentos = await estabelecimento.findAll()
    res.status(200).json(estabelecimentos);
})

router.get('/:id', async (req, res) => {
    const estabelecimentos = await estabelecimento.findAll()
    const estabelecimento = await estabelecimento.findByPk(req.params.id)
    res.json(estabelecimentos);
})

router.post('/', async (req, res) => {
    const { id, nome, endereco, categoria } = req.body
    const newEstabelecimento = estabelecimento.create({ id, nome, endereco, categoria })
    res.status(200).json(newEstabelecimento)
})


module.exports = router
