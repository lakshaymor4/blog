import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "null";

const CreatePost = () => {
  const [newPost, setNewPost] = React.useState({ title: "", content: "" });

  const createPost = async () => {
    try {
      // Construct the API payload
      const payload = {
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
        }),
      };

      // Make the POST request
      await axios.post(`${API_URL}/posts`, payload);
      toast.success("Post created");
      setNewPost({ title: "", content: "" }); // Reset form fields
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          rows={4}
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createPost}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
