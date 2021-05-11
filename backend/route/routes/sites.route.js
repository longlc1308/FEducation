const express = require('express');
const router = express.Router();
const sitesController = require('./../../controllers/SitesController');

router.post('/', sitesController.index);

module.exports = router;