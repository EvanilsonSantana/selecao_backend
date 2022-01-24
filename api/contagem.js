
const express = require('express')
const router = express.Router()
const { dados_contagem } = require('../models');


router.get('/', async(req, res, next) => {
    const contagem = await dados_contagem.findAll()
    res.status(200).json(contagem);
})

router.get('/:id', async (req, res) => {
    const contagens = await dados_contagem.findAll()
    const dados_contagem = await dados_contagem.findByPk(req.params.id)
    res.json(contagens);
})


router.post('/', async (req, res) => {
    const { id, channel, EndTime, EnteredSubtotal, ExitedSubtotal, RuleName, StartTime } = req.body
    const newContagem = dados_contagem.create({ id, channel, EndTime, EnteredSubtotal, ExitedSubtotal, RuleName, StartTime })
    res.status(200).json(newContagem)
    
})

module.exports = router