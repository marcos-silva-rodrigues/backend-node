const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./src/index')(app);

app.listen(3000, () => {
  console.log('Express has been started')
});