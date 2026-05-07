const express = require('express');
const router = express.Router();
const { getAllStories, getStory, bookmarkStory } = require('../controllers/storiesController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getAllStories);
router.get('/:id', getStory);
router.post('/:id/bookmark', protect, bookmarkStory);

module.exports = router;
