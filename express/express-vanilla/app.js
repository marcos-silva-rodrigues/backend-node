const express = require('express');
const path = require('path');

const app = express();
const routes = require('./routes');
const customMiddleware = require('./middleware');

// app.use(customMiddleware)

app.get('/api', customMiddleware, (req, res) => {
  return res.send('Node Backend with express.js');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Express Started');
});