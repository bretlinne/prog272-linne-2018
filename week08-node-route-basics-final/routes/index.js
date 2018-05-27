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

router.get('/calculateFeetFromMiles', function(req, res, next) {
    'use strict';
    console.log('Calc button pressed');
    var msg = {result: req.query.miles * 5280};
    res.send({msg});
});

router.post('/calculateCircumference', function(req, res) {
    var radius = req.body.propForServer;
    console.log('Calc circumference pressed, radius: ' + radius);
    var msg = {result: 2 * Math.PI * radius }
    res.send({msg});
});
module.exports = router;
