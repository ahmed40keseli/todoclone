// server.js
require('./config/db'); // Connect to MongoDB
const express = require('express');
const app = express();
const port = 3000;

const UserRouter = require('./api/User');
const TaskRouter = require('./api/Task'); // Import Task routes

app.use(express.json()); // Middleware to parse JSON

// // For accepting post form data
// const bodyParser = require('express').json;
// app.use(bodyParser());


app.use('/user', UserRouter); // User routes
app.use('/tasks', TaskRouter); // Task routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
