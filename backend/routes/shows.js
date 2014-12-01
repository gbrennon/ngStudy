var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  array = ['Dr who', 'Fringe', 'AHS'];
  res.json(array);
});

module.exports = router;
