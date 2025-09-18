const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
  userId: String,
  filePath: String,
  uploadedAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Report',ReportSchema);

