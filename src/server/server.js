var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:', port);
});
