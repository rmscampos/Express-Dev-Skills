const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');
const skillsCtrl = require('../controllers/skills');

// GET skills
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
//GET skills with ID# (gives each individual skill its own page)
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);



module.exports = router;
