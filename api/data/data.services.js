const csv = require('csv-parser')
const fs = require('fs')

module.exports = {
  readCSV
}

function readCSV(filepath) {
  return new Promise((resolve, reject) => {
    let chunk = []
    fs.createReadStream(filepath)
    .pipe(csv())
    .on('data', (data) => {
      chunk.push(data)
    })
    .on('error', (err) => {
      reject(err)
    })
    .on('end', () => resolve(chunk))  
  })
}