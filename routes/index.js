'use strict';


// require route files for resources
module.exports = function(router){

  // Serve single page frontend
  router.get('/', function(req, res) {
    console.log("---- rendering homepage in browser ----");
    // renders the views/index.ejs file
    res.render('index');
  });

  router.get('/events', function() {

  });

};