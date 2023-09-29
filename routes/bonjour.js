var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {

  res.render('bonjour', { title: 'Bonjour', name: req.params.name });
});

router.get('/', function(req, res, next) {
    
      res.render('bonjour', { title: 'Bonjour', name: 'inconnu' });
    });

module.exports = router;
