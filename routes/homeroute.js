const path = require('path');

const express = require('express');

const home = require('../controllers/home');

const router = express.Router();

router.get('/', home.Home);
router.get('/index', home.Home);
router.get('/about', home.about);
module.exports = router;