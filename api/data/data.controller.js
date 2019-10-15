const Data = require('./data.models')
const { readCSV } = require('./data.services')
const config = require('../../config')

exports.getDatasetFromCollection = async function(req, res) {
  Data.findOne({
    collection_type: req.params.collection_type, 
    name: req.params.name
  }).then(
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

exports.getAllDatasetsFromCollection = async function(req, res) {
  console.log("collection type:", req.params.collection_type)
  Data.find({collection_type: req.params.collection_type}).then(
    (datasets) => {
      console.log("datasets:", datasets)
      return res.status(200).send({
        datasets: datasets.map( data => {
          console.log(data)
          return {
            name: data.name,
            endpoint: `/api/${config.apiVersion}/${data.collection_type}/${data.name}`,
            created_at: data.created_at,
            updated_at: data.updated_at
          }
        })
      })
    })
    .catch((error) => {
      console.log(error)
      return res.status(400).send({
        error: error
      })
    })
}

exports.getAllDatasets = async function(req, res) {
  Data.find().distinct('collection_type').then(
    (dataset) => {
      return res.status(200).send({
        collection_endpoints: dataset.map( data => {
          return `/api/${config.apiVersion}/${data}`
        })
      })
    })
    .catch((error) => {
      return res.status(404).send({
        error: error
      })
    })
}


exports.uploadData = async function(req, res) {

  readCSV(req.file.path).then( content => {

    Data.create({
      name: req.body.name,
      description: req.body.description,
      collection_type: req.params.collection_type,
      data: content
    }).then( dataset => {
      return res.status(200).send({
        ...dataset.toJSON(),
        message: "File uploaded!"
      })
    }).catch((err) => {
      return res.status(422).send({
        error: err
      })
    })
  }).catch((err) => {
    return res.status(422).send({
      error: err
    })
  })
}