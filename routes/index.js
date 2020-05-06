var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Eat-Da-Burger' });
});

// POST for creating burger
router.post('/burgers/create', (req, res) => {
  console.log(req.body.burgerName);
});

module.exports = router;
