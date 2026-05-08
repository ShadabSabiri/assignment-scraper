const express = require('express');
const router = express.Router();
const { getAllStories, getStory, bookmarkStory } = require('../controllers/storiesController');
const { protect, optionalProtect } = require('../middleware/auth');

router.get('/', optionalProtect,getAllStories);
router.get('/:id', getStory);
router.post('/:id/bookmark', protect, bookmarkStory);

module.exports = router;
