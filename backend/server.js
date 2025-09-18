const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const reportRoutes = require('./routes/reports');
const reminderRoutes = require('./routes/reminders');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);
app.use('/reports', reportRoutes);
app.use('/reminders', reminderRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});

