module.exports = function(app,config) {

  const emailer = require('./email');



  if (config.api.ENV === "DEV") {
    app.get('/', function(req,res) {
      res.sendFile(__dirname + '/app');
    });
  } else {
    // in PRD mode the '/' location will be proxied out 
    // to the client endpoint instead of serving it here
    app.get('/api', function(req,res) {
      res.status(200).send('OK');
  }

  app.post('/api/contact', function(req,res) {
    let message = req.body;
    let result = emailer(message,config);
    res.send(result);
  });

};
