import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "null";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        console.log(response);
        setPost(response.data);
      } catch (error) {
        toast.error("Failed to fetch post");
      }
    };
    fetchPost();
  }, [id]);

  return post ? (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-gray-500 text-sm">Created: {post.created_at}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SinglePost;
