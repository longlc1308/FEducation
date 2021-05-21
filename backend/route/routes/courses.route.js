const express = require('express');
const router = express.Router();
const coursesController = require('../../controllers/CoursesController');

router.get('/edit/:id', coursesController.edit)
router.get('/:slug', coursesController.show);
router.get('/', coursesController.index);

module.exports = router;