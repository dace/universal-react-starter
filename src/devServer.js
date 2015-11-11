/* @flow */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

var port = process.env.WEBPACK_PORT || 9000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

app.get('*', (req, res) => {
  res.send('Error 404: File Not Found');
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:%s', port);
});
