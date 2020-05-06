const express = require('express');
const router = express.Router();
const getAll = require('../config/orm').getAll;
const updateDevourById = require('../config/orm').updateDevourById;
const add = require('../config/orm').add;

/* GET home page. */
router.get('/', (req, res, next) => {
  getAll().then(burgers => {
    console.log(burgers);
    res.render('index', { title: 'Eat-Da-Burger', burgers: burgers });
  });
});

// CREATE post route
router.post('/burgers/create', (req, res) => {
  console.log(req.body.burgerName);
  add(req.body.burgerName);
  res.redirect('/');
});

// UPDATE put route
router.put('/burgers/:id', (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  updateDevourById(id).then(upres => console.log(upres))
    .then(() => res.sendStatus(200));
});

module.exports = router;
