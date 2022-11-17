import { useState } from "react";
import ProfileImage from "../Components/ProfileImage";

const Reply = ({ currentUser, updatePosts, replyId }) => {
  const [formContent, setFormContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const post = {
      userId: currentUser._id,
      content: formContent,
      isReply: true,
      repliedToId: replyId,
    };

    await fetch(`https://traka-postit-server.onrender.com/api/posts/create`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    updatePosts();
    setFormContent("");
  }

  return (
    <div className="shadow-md bg-white rounded p-6 max-w-2xl mx-auto mt-6 flex gap-6 w-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full items-center"
      >
        <ProfileImage userProfile={currentUser} />
        <textarea
          className="w-3/4 h-40 p-3 border rounded-md border-cyan-400 dark:text-black"
          name="content"
          value={formContent}
          onChange={(e) => setFormContent(e.target.value)}
          placeholder="Reply to post"
        ></textarea>
        <button className="px-6 py-3 max-h-12 bg-blue-600 hover:opacity-50 rounded-md text-white uppercase font-bold">
          Reply
        </button>
      </form>
    </div>
  );
};

export default Reply;
