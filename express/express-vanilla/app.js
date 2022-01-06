const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Node Backend with express.js');
});

app.listen(3000, () => {
  console.log('Express Started');
});