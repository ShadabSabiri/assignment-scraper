import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const StoryCard = ({ story }) => {

  const navigate = useNavigate();

  const { user, setUser } =
    useContext(AuthContext);

  // check whether current story is bookmarked
  const isBookmarked =
    user?.bookmarks?.some(
      (id) =>
        String(id) === String(story._id)
    );

  const handleBookmark = async () => {

    try {

      // guest user
      if (!user) {

        alert(
          "Please login to bookmark a story."
        );

        navigate("/login");

        return;
      }

      const res = await api.post(
        `/stories/${story._id}/bookmark`
      );

      // updated user object
      const updatedUser = {
        ...user,
        bookmarks: res.data.bookmarks,
      };

      // update react state
      setUser(updatedUser);

      // persist after refresh
      localStorage.setItem(
        "userInfo",
        JSON.stringify(updatedUser)
      );

    } catch (error) {

      console.log(
        error.response?.data ||
          error.message
      );

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

      <button
        onClick={handleBookmark}
        className={`mt-5 px-4 py-2 rounded-lg text-white transition ${
          isBookmarked
            ? "bg-red-500 hover:bg-red-600"
            : "bg-black hover:bg-gray-800"
        }`}
      >
        {isBookmarked
          ? "★ Bookmarked"
          : "☆ Bookmark"}
      </button>

      <Link
        to={`/stories/${story._id}`}
        className="mt-5 px-4 py-2 ml-2 rounded-lg text-white transition bg-black hover:bg-gray-800"
      >
        Details
      </Link>

    </div>
  );
};

export default StoryCard;