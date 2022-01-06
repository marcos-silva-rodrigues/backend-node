const express = require('express');
const app = express();

const routes = require('./routes');

app.get('/', (req, res) => {
  return res.send('Node Backend with express.js');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Express Started');
});