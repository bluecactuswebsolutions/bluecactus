module.exports = function(app) {

  app.get('/contact',function(req,res) {
    res.redirect('/#/contact');
  });

  app.get('/portfolio', function(req,res) {
    res.redirect('/#/portfolio');
  });

};
