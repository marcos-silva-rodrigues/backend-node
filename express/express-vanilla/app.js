const express = require('express');
const path = require('path');

const app = express();
const routes = require('./routes');
const customMiddleware = require('./middleware');

// app.use(customMiddleware)

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public', 'views'));

app.get('/', (req, res) => {
  return res.render('index', {
    message: 'Hello from Express.js with Pug'
  })
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('public', express.static(path.join(__dirname, 'public')))

app.use('/api', customMiddleware, routes);

app.listen(3000, () => {
  console.log('Express Started');
});