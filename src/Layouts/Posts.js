import { useEffect, useState, useCallback } from "react";
import PostCard from "../Components/PostCard";
import Create from "./Create";
import Edit from "./Edit";
import Reply from "./Reply";

const Posts = ({ users, currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);
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
      const replies = posts.filter((post) => {
        return post.isReply === true;
      });

      setReplies(replies);
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

  function renderReplies(pid) {
    let rep = replies.filter((r) => r.repliedToId === pid);

    let reps = rep.map((reply) => (
      <PostCard
        key={reply._id}
        post={reply}
        users={users}
        currentUser={currentUser}
        updatePosts={updatePosts}
        handleEdit={handleEdit}
        isReply={reply.isReply}
      />
    ));
    return reps;
  }

  return (
    <div className=" w-screen">
      <div className="w-screen h-[70vh] max-w-3xl mx-auto overflow-y-auto flex flex-col gap-3 p-6 mt-4 ">
        {posts?.map((post, i) => {
          return (
            <div key={post._id}>
              <PostCard
                key={post._id}
                post={post}
                users={users}
                currentUser={currentUser}
                updatePosts={updatePosts}
                handleEdit={handleEdit}
              />

              {renderReplies(post._id)}

              {/* <div key={post._id + i}>
                {replies.map((reply, i) => {
                  return (
                    <>
                      {reply.repliedToId === post._id ? (
                        <PostCard
                          key={reply._id}
                          post={reply}
                          users={users}
                          currentUser={currentUser}
                          updatePosts={updatePosts}
                          handleEdit={handleEdit}
                          isReply={reply.isReply}
                        />
                      ) : null}
                    </>
                  );
                })}
              </div> */}
            </div>
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
