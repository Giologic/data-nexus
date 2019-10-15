// data.models.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String, 
    required: false
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date
  },
  data: {
    type: String,
    required: true,
  },
  collection_type: {
    type: String,
    required: true
  }
});

DataSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
})

DataSchema.methods.toJSON = function() {
  return {
    name: this.name,
    description: this.description,
    created_at: this.created_at,
    updated_at: this.updated_at,
    data: this.data
  }
};





module.exports = mongoose.model('Data', DataSchema);
