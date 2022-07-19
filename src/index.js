const express = require('express');
const config = require('../package.json');
const routes = require('./routes');

const app = express();

app.use((request, response, next) => {
  request.appVersion = config.version;
  next();
});

app.get('/', (request, response) => {
  response.json({ message: `Welcome to MYCONTACTS API ${request.appVersion}` });
});

app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
