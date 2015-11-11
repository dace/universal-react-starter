import path from 'path';
import React from 'react';
import { match, RoutingContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({ layout: false }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  match({
    routes,
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const markup = renderToString(<RoutingContext {...renderProps} />);
      res.render('index',
        {
          content: markup,
          layout: false,
        }
      );
      // res.status(200).send();
    } else {
      res.status(404).send('Error 404: Page Not found');
    }
  });
});

app.listen(port, (err) => {
  if err console.log(err);
  console.log('Listening at http://localhost:', port);
});
