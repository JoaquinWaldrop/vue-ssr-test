//server.js
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
//obtain bundle
const bundle = require('./dist/server.bundle.js');
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
  //set template
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('*', (req, res) => {

  bundle.default({ url: req.url }).then((app) => {
    const context = {
      title: 'Default'
    };
    renderer.renderToString(app, context).then(html => {
      res.end(html);
    }).catch(err => {
      console.error(err)
    })
  }, (err) => {
    console.log(err);
  });
});

server.listen(8080);
