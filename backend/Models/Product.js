const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  categorey:{
    type: String
  }
}, {
    collection: 'addproducts'
  })

module.exports = mongoose.model('Student', productSchema)