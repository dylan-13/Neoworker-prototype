const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))// pour les params
app.use(bodyParser.json())

require('./DataManagement.js')
//les root sont dans le dossier back/root/admin ou user
require('./routes/freelancer.js')(app)
require('./routes/user.js')(app)
require('./routes/mission.js')(app)

models
    .sequelize
    .sync({force: false})
    .then(() => app.listen(5000, () => console.log('server is listenning')))