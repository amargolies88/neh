const express = require('express');
const router = express.Router();
const { add, getAll, updateDevourById } = require('../config/orm');

/* GET home page. */
router.get('/', (req, res, next) => {
  getAll().then(burgers => {
    res.render('index', { title: 'Eat-Da-Burger', burgers: burgers });
  });
});

// CREATE post route
router.post('/burgers/create', (req, res) => {
  add(req.body.burgerName);
  res.redirect('/');
});

// UPDATE put route
router.put('/burgers/:id', (req, res) => {
  const id = req.params.id;
  updateDevourById(id).then(upres => console.log(upres))
    .then(() => res.sendStatus(200));
});

module.exports = router;
