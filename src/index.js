const express = require('express');
const routes = require('./routes');

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Welcome to MYCONTACTS API' });
});

app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
