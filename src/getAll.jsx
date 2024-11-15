import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "null";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);

        // Parse the 'body' key
        const posts = JSON.parse(response.data.body);
        setPosts(posts);
      } catch (error) {
        toast.error("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white shadow-md rounded-lg p-6 mb-6"
          >
            <Link to={`/post/${post.post_id}`}>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            </Link>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <p className="text-gray-500 text-sm">Id: {post.post_id}</p>
            <p className="text-gray-500 text-sm">Created: {post.created_at}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default AllPosts;
