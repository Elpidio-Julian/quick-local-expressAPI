const express = require('express');
// const bodyParser = require('body-parser'); ** example middleware for parsing JSON content **

const app = express();
const port = 3000;

// Add any necessary middleware for debugging here
// app.use(bodyParser.json());

// Create necessary handlers for returning request response information as needed for debugging purposes
// get request at localhost:{port} that send back the sent request information
app.get('/', (req, res, next) => {
  console.log('Received get request');
  res.send({reqData: req})
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
