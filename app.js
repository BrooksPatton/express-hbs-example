const express = require('express');
const hbs = require('hbs');
const locals = require('./locals.js');

let app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app);

app.get('/', (req, res) => {
  res.render('home', {
    foods: [
      'chalupa',
      'ceviche',
      'candy sprinkles'
    ]
  });
});

app.get('/page2', (req, res) => {
  res.render('page2');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
