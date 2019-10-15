// data.routes.js

var controller = require('./data.controller')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


module.exports = function(router) {
  router.post('/upload/:collection_type', upload.single('data_file'), controller.uploadData)
  router.get('/terrain', controller.getAllDatasets)
  router.get('/terrain/:name', controller.getData)
}