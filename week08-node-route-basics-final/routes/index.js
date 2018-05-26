var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Linne Final' });
});

// we're adding a route called search
router.get('/search', function(req, res, next){
  'use strict';
  console.log('Server side search called');
  res.send({result: 'Success this function worked',
  value:'search result is',
      errors:'none'
  });
});

router.get('/calculateFeetFromMiles', function(request, response) {
    response.send({result: request.query.miles * 5280});
});
module.exports = router;
