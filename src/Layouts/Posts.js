import { useEffect, useState, useCallback } from "react";
import PostCard from "../Components/PostCard";
import Create from "./Create";
import Edit from "./Edit";

const Posts = ({ users, currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://traka-postit-server.onrender.com/api/posts"
      );
      //failed response
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const posts = await response.json();
      setPosts(posts);
    }

    getPosts();

    return;
  }, [posts.length]);

  async function updatePosts() {
    const response = await fetch(
      "https://traka-postit-server.onrender.com/api/posts"
    );
    //failed response
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const posts = await response.json();
    setPosts(posts);
    setEditing(false);
  }

  function handleEdit(Id) {
    setEditId(Id);
    setEditing(true);
  }

  return (
    <div className=" w-screen">
      <div className="w-screen h-[70vh] max-w-3xl mx-auto overflow-y-auto flex flex-col gap-3 p-6 mt-4 ">
        {posts?.map((post) => {
          return (
            <PostCard
              key={post._id}
              post={post}
              users={users}
              currentUser={currentUser}
              updatePosts={updatePosts}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
      {currentUser && (
        <>
          {!editing ? (
            <Create currentUser={currentUser} updatePosts={updatePosts} />
          ) : (
            <Edit
              editId={editId}
              updatePosts={updatePosts}
              currentUser={currentUser}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
