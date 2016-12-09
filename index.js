const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const configData = fs.readFileSync('./configuration.json');
const config = JSON.parse(configData);
const cluster = require('cluster');

if (cluster.isMaster) {
  const cpus = require('os').cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  app.set('port', config.port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  if (config.api.ENV === "DEV") {
    app.use(express.static(path.join(__dirname, 'app')));
  }

  app.listen(app.get('port'), function() {
    console.log('Email Service ' + cluster.worker.id + " Running on port: " + app.get('port'));
  });

  const routes = require('./service/routes')(app,config);
  const redirect = require('./service/redirect')(app);
}
