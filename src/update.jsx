import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "null";

const UpdatePost = () => {
  const [postId, setPostId] = React.useState("");
  const [updatedPost, setUpdatedPost] = React.useState({
    title: "",
    content: "",
  });

  const updatePost = async () => {
    try {
      const payload = {
        title: updatedPost.title,
        content: updatedPost.content,
      };

      const res = await axios.put(`${API_URL}/posts/${postId}`, payload);
      console.log(res);
      toast.success("Post updated");
      setPostId("");
      setUpdatedPost({ title: "", content: "" });
    } catch (error) {
      toast.error("Failed to update post");
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
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Updated Title"
          value={updatedPost.title}
          onChange={(e) =>
            setUpdatedPost({ ...updatedPost, title: e.target.value })
          }
        />
        <textarea
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          rows={4}
          placeholder="Updated Content"
          value={updatedPost.content}
          onChange={(e) =>
            setUpdatedPost({ ...updatedPost, content: e.target.value })
          }
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={updatePost}
        >
          Update Post
        </button>
      </div>
    </div>
  );
};

export default UpdatePost;
