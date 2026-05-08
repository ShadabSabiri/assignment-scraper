import { useEffect, useState } from "react";
import api from "../services/api";
import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchStories();
  }, [page]);

  const fetchStories = async () => {
    try {
      const res = await api.get(`/stories?page=${page}&limit=4`);
      console.log(res);
      setStories(res.data.stories);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Top Stories</h1>

        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Home;
