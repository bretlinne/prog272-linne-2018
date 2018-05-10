var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Linne' });
});

// lets add a route called 'search'
router.get('/search', function(req, res, next) {    // changed '/' to '/search'
  'use strict';
  console.log('Server side search called');
    res.send({result:'success that this worked.  foo,',           // changed render to send &
                                            // replaced old param w/ result:'success'
                                            // this stubs out the search route
        value:'search result is',
        errors:'none'
    });
});

// add button

module.exports = router;
