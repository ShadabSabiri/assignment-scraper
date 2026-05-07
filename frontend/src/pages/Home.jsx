import { useEffect, useState } from "react";
import api from "../services/api";
import StoryCard from "../components/StoryCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await api.get("/stories");
      console.log(res);
      setStories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Top Stories</h1>

      {stories.map((story) => (
        <StoryCard key={story._id} story={story} />
      ))}
    </div>
  );
};

export default Home;
