const express = require('express');
const router = express.Router();
const getAll = require('../config/orm').getAll;
const updateDevourById = require('../config/orm').updateDevourById;

/* GET home page. */
router.get('/', (req, res, next) => {
  getAll().then(burgers => {
    console.log(burgers);
    res.render('index', { title: 'Eat-Da-Burger', burgers: burgers });
  })

});

// CREATE post route
router.post('/burgers/create', (req, res) => {
  getAll("burgers").then(res => console.log(res));
});

// UPDATE put route
router.put('/burgers/:id', (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  updateDevourById(id).then(res => console.log(res));
});

module.exports = router;
