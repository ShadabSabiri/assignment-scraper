import api from "../services/api";
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
  const handleBookmark = async () => {
    try {
      await api.post(`/stories/bookmark/${story._id}`);
      alert("Bookmarked");
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-xl transition duration-300">

  <h3 className="text-xl font-bold text-gray-800 mb-3">
    {story.title}
  </h3>

  <div className="space-y-2 text-gray-600">

    <p>
      <span className="font-semibold text-black">
        Points:
      </span>{" "}
      {story.points}
    </p>

    <p>
      <span className="font-semibold text-black">
        Author:
      </span>{" "}
      {story.author}
    </p>

    <p>
      <span className="font-semibold text-black">
        Posted:
      </span>{" "}
      {story.postedAt}
    </p>
  </div>

  <div className="flex items-center gap-3 mt-5">

    <button
      onClick={handleBookmark}
      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Bookmark
    </button>

    <Link to={`/stories/${story._id}`}>
      <button className="border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
        Details
      </button>
    </Link>

  </div>
</div>
  );
};

export default StoryCard;
