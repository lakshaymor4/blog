import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "null";

const DeletePost = () => {
  const [postId, setPostId] = React.useState("");

  const deletePost = async () => {
    try {
      const resu = await axios.delete(`${API_URL}/posts/${postId}`);
      console.log(resu);
      toast.success("Post deleted");
      setPostId("");
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={deletePost}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default DeletePost;
