const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  article: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Product", ProductSchema)