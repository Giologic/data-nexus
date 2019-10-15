// data.routes.js

var controller = require('./data.controller')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


module.exports = function(router) {
  router.post('/upload/:collection_type', upload.single('data_file'), controller.uploadData)
  router.get('/datasets', controller.getAllDatasets)
  router.get('/:collection_type', controller.getAllDatasetsFromCollection)
  router.get('/:collection_type/:name', controller.getDatasetFromCollection)
}