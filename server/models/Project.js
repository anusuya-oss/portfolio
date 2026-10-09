const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/600x400?text=Project+Image'
  },
  technologies: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
  },
  liveURL: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);
