const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');
const router = express.Router()
const app = express()
const config = require('./config')

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataRoutes = require('./api/data/data.routes')

app.use(cors())
app.use(`/api/${config.apiVersion}`, router)
dataRoutes(router)

app.get('/', (req, res) => {
  res.send({
    status: 'OK'
  })
})

module.exports = app