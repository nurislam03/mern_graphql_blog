const mongoose = require('mongoose');

const TextPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TextPost = mongoose.model('textPost', TextPostSchema);