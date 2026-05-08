const Story = require("../models/Story");
const User = require("../models/User");

exports.getAllStories = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const totalStories =
      await Story.countDocuments();

    res.json({
      stories,
      currentPage: page,
      totalPages: Math.ceil(totalStories / limit),
      totalStories,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });

  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.bookmarkStory = async (req, res) => {
  try {
    const storyId = req.params.id;

    const user = await User.findById(req.user.id);

    const alreadyBookmarked = user.bookmarks.includes(storyId);

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter((id) => id.toString() !== storyId);
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    return res.json({
      bookmarked: !alreadyBookmarked,
      bookmarks: user.bookmarks,
      message: alreadyBookmarked ? "Bookmark removed" : "Bookmark added",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
