var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'CongressServer' });
});

const fs = require('fs');

function readFile(fileName) {
    'use strict';
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                reject(err);
            }
            resolve({
                'result': fileContents
            });
        });
    });
}

router.get('/address-list', function(req, res) {
    'use strict';
    readFile(__dirname + '/address-list.json')
        .then((json) => {
            //res.send(<YOU WRITE THIS PART>);
            //console.log(json.result);  // we want to transform this fro string to object
            const addressAsJson = JSON.parse(json.result);
            res.send(addressAsJson);
        });
});

module.exports = router;
