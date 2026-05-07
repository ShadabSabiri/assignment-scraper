const Story = require('../models/Story');



exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ points: -1 });

    res.status(200).json({
      success: true,
      count: stories.length,
      data: stories
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message
    });
  }
};

exports.getStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        res.json(story);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const User = require("../models/User");

exports.bookmarkStory = async (req, res) => {
  try {
    const userId = req.user.id;
    const storyId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isBookmarked = user.bookmarks.includes(storyId);

    if (isBookmarked) {
      // remove bookmark
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );

      await user.save();

      return res.json({ message: "Bookmark removed" });
    } else {
      // add bookmark
      user.bookmarks.push(storyId);
      await user.save();

      return res.json({ message: "Bookmark added" });
    }

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};
