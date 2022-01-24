const express = require('express')

const cameraRouter = require('./camera')
const estabeleRouter = require('./estabelecimento')
const gestorRouter = require('./gestor')
const contagemRouter = require('./contagem')


const router = express.Router()

router.get('/', (req, res) => {
    res.send("Está funcionando");
})

router.use('/camera', cameraRouter)
router.use('/estabelecimento', estabeleRouter)
router.use('/gestor', gestorRouter)
router.use('/contagem', contagemRouter)


module.exports = router
