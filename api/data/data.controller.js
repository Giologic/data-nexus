const Data = require('./data.models')
const { readCSV } = require('./data.services')

exports.getData = async function(req, res) {
  Data.findOne({name: req.params.name}).then(
    (data) => {
      if(data) return res.status(200).send(data)
      else return res.status(404).send({
        error: `${req.params.name} not found`
      })
    })
    .catch((error) => {
      return res.status(404).send({
        error: error
      })
    })
}

exports.getAllDatasets = async function(req, res) {
  Data.find({}).then(
    (data) => {
      if(data) return res.status(200).send(data)
    })
    .catch((error) => {
      return res.status(404).send({
        error: error
      })
    })
}


exports.uploadData = async function(req, res) {

  readCSV(req.file.path).then( data => {

    console.log("Data Chunk", data)
    return res.status(200).send({
      data: {
        name: req.body.name,
        description: req.body.description,
        contents: data
      },
      message: "File uploaded!"
    })
  }).catch((err) => {
    return res.send(422).send({
      error: err
    })
  })
}