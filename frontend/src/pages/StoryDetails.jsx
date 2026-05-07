import { useEffect, useState } from "react";
import { Link, useParams,useNavigate  } from "react-router-dom";
import api from "../services/api";

const StoryDetails = () => {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStory();
  }, []);

  const fetchStory = async () => {
    try {
      const res = await api.get(`/stories/${id}`);

      setStory(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  if (!story) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-6">{story.title}</h1>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Author:</span> {story.author}
        </p>

        <p>
          <span className="font-semibold">Points:</span> {story.points}
        </p>

        <p>
          <span className="font-semibold">Posted:</span> {story.postedAt}
        </p>
      </div>

      <a
        href={story.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6  ml-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Visit Original Story
      </a>
      
      <button onClick={()=>navigate(-1)}

        className="inline-block mt-6 ml-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Back
      </button>


    </div>
  );
};

export default StoryDetails;
