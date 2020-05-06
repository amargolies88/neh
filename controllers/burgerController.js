const express = require('express');
const router = express.Router();
const { giveAllBurgers, devourBurger, addBurger } = require('../models/burger');

/* GET home page. */
router.get('/', (req, res, next) => {
  giveAllBurgers().then(burgers => {
    res.render('index', { title: 'Eat-Da-Burger', burgers: burgers });
  });
});

// CREATE post route
router.post('/burgers/create', (req, res) => {
  addBurger(req.body.burgerName);
  res.redirect('/');
});

// UPDATE put route
router.put('/burgers/:id', (req, res) => {
  const id = req.params.id;
  devourBurger(id).then(upres => console.log(upres))
    .then(() => res.sendStatus(200));
});

module.exports = router;
