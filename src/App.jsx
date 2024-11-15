import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllPosts from "./getAll";
import CreatePost from "./createPost";
import SinglePost from "./singlePost";
import { ToastContainer } from "react-toastify";
import UpdatePost from "./update";
import DeletePost from "./delete";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Blog
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-gray-300">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/" element={<AllPosts />} />
          <Route path="/update" element={<UpdatePost />} />
          <Route path="/delete" element={<DeletePost />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
