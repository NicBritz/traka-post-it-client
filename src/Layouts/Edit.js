import { useState, useEffect } from "react";
import ProfileImage from "../Components/ProfileImage";

const Edit = ({ currentUser, updatePosts, editId }) => {
  const [post, setPost] = useState([]);
  const [formContent, setFormContent] = useState(post.content);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        `https://traka-postit-server.onrender.com/api/posts/${editId}`
      );
      //failed response
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const post = await response.json();
      setPost(post);
      setFormContent(post.content);
    }

    getPost();

    return;
  }, [editId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const post = {
      userId: currentUser._id,
      content: formContent,
    };

    await fetch(
      `https://traka-postit-server.onrender.com/api/posts/update/${editId}`,
      {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    updatePosts();
    setFormContent("");
  }

  return (
    <div className="shadow-md bg-white rounded p-6 max-w-2xl mx-auto mt-6 flex gap-6 ">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full items-center">
        <ProfileImage userProfile={currentUser} />
        <textarea
          className="w-3/4 h-40 p-3 border rounded-md border-cyan-400 dark:text-black"
          name="content"
          value={formContent}
          onChange={(e) => setFormContent(e.target.value)}
          placeholder="Create a post"
        ></textarea>
        <button className="px-6 py-3 max-h-12 bg-blue-600 hover:opacity-50 rounded-md text-white uppercase font-bold">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
