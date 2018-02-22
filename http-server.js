const express = require('express');
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 3001;

express()
  .use(express.static(path.join(__dirname, 'build')))
  .use(compression())
  .get('/home', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
  .get('/*', (req, res) => res.redirect('/home'))
  .listen(PORT, () => console.log(`http server is listening on http://localhost:${ PORT }/`));
