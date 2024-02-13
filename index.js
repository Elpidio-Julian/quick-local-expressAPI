const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Add any necessary middleware for debugging here
app.use(bodyParser.json());

// Create necessary handlers for returning request response information as needed for debugging purposes
// get request at localhost:{port} that sends back the sent request information
app.get('/', (req, res, next) => {
  console.log('Received get request', req); // log request data in console
  res.send({reqData: 'request received'}); //confirmed request placeholder
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
