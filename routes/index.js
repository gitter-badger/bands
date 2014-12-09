'use strict';

var request = require("request");

// require route files for resources
module.exports = function(router){

  // Serve single page frontend
  router.get('/', function(req, res) {
    console.log("---- rendering homepage in browser ----");
    // renders the views/index.ejs file
    res.render('index');
  });

  router.get('/events', function(req, res) {
    var url = 'http://api.bandsintown.com/artists/Sons%20of%20Bill/events.json?api_version=2.0&app_id=sonsofbill_email_html_generator',
        requestOptions = {
          url: url,
          json: true
        };

    request(requestOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else {
        res.send({ success: false, message: 'Unknown Error getting result from bandsintown api.'});
      }
    })
  });

};