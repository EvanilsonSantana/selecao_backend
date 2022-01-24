const express = require('express');
const routers = require('./api');
const { sequelize } = require('./models/index')
const app = express();



app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
    console.log('Conectado ao banco')
})

app.listen(3000, function() {
    console.log('App online!')
})
