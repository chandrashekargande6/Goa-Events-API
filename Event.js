const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  venue: String,
  type: String,
  description: String,
  link: String
});

// 👇 Use correct collection name
module.exports = mongoose.model('Event', eventSchema, 'party-events-ingoa');
