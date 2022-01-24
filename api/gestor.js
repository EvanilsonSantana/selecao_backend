const express = require('express');
const { gestor } = require('../models');
const router = express.Router()



router.get('/', async (req, res) => {
    const gestores = await gestor.findAll()
    res.status(200).json(gestores);
})

router.get('/:id', async (req, res) => {
    const gestores = await gestor.findAll()
    const gestor = await gestor.findByPk(req.params.id)
    res.json(gestores);
})

router.post('/', async (req, res) => {
    const { id, nome, cpf, email} = req.body
    const newGestor =  gestor.create({ id, nome, cpf, email})
    res.status(200).json(newGestor)
})

module.exports = router
