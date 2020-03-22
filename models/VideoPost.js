const mongoose = require('mongoose');

const VideoPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  video_link: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = VideoPost = mongoose.model('videoPost', VideoPostSchema);