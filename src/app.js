const express = require('express');
const app = express();
const path = require("path");

// EJS
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.get('/*', function (req, res) {
  res.render('index');
});
 
app.listen(3000);