import { useState, useEffect } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const Vote = ({ post }) => {
  const [votes, setVotes] = useState(post.votes);

  useEffect(() => {
    async function updateVotes() {
      await fetch(
        `https://traka-postit-server.onrender.com/api/posts/update/${post._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ votes: votes }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    updateVotes();
  }, [votes, post._id]);

  function addVote() {
    setVotes(votes + 1);
  }
  function removeVote() {
    if (votes === 0) return;
    setVotes(votes - 1);
  }
  return (
    <div className=" text-blue-500 flex items-center gap-2">
      <button onClick={addVote}>
        <MdAdd />
      </button>
      <p className="text-blue-800 font-bold text-lg">{votes}</p>
      <button onClick={removeVote}>
        <MdRemove />
      </button>
    </div>
  );
};

export default Vote;
