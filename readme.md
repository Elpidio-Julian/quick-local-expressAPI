# Quick Start a Local API to quickly send any HTTP request and return the response for debugging using express.js api routes

## What you will need
 * node.js
 * express npm package

## Getting Started:
1. Download the necessary dependencies using npm i
2. configure the port if necessary
3. create handlers to suit your needs for debugging specific requests
4. Use npm run start to start the server default at localhost:3000



### What is done for you?:
 * express api server file precreated
 * example debug handler for a get request
 * information provided to create more handlers as needed


#### Extra notes

 * To use asynchronous requests use this format
 ```javascript
 function fooPromise(foo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if(foo === 'foo') resolve(`resolved, ${foo} is valid`);
      else resolve(`resolved, ${foo} is invalid`);
    });
  });
 } ;

 fooValidate = async (foo) => {
  const result = await fooPromise(foo);
  return result
 }; // async function example

 app.get('/async', async (req, res, next) => { // async api call handler
  req.foo = 'foo'
  result = await fooValidate(req.foo)
  res.send({
  reqData: 'placeholder', 
  resultInfo: 'request received'
  });
 });
 ```
 * Optional : To streamline the process of adding and testing debugging handlers,
 consider using the nodemon npm package and adding a script in the package.json for initializing the server
 ```javascript
  {
  "name": "quick-express-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
    "start:dev": "nodemon index.js" // new script, do not include this comment
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
 ```