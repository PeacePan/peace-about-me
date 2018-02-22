const express = require('express');
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 80;

express()
  .use(express.static(path.join(__dirname, 'build')))
  .use(compression())
  .get('/*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
  .listen(PORT, () => console.log(`http server is listening on http://localhost:${ PORT }/`));
