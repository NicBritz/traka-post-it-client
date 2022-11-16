import IconButton from "./IconButton";
import ProfileImage from "./ProfileImage";
import Vote from "./Vote";

const PostCard = ({ post, users, currentUser, updatePosts, handleEdit }) => {
  const author = users.filter((user) => user._id === post.userId)[0];

  async function deletePost() {
    await fetch(
      `https://traka-postit-server.onrender.com/api/posts/delete/${post._id}`,
      {
        method: "DELETE",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updatePosts();
  }

  return (
    <div className=" shadow-md bg-white rounded p-6 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <ProfileImage small={true} userProfile={author} />
        <p className="mx-2 font-bold text-lg">{author.username}</p>

        {currentUser && currentUser._id === author._id ? (
          <div className="flex flex-col gap-1">
            <button onClick={deletePost}>
              <IconButton color="red" text="delete" />
            </button>
            <button onClick={() => handleEdit(post._id)}>
              <IconButton color="orange" text="edit" />
            </button>
          </div>
        ) : (
          <IconButton color="blue" text="reply" />
        )}
      </div>

      <p className="text-sm px-6 py-4">{post.content}</p>
      <div className="flex justify-center items-center gap-12">
        <Vote post={post} />
        <p className="mx-2 font-light text-xs">
          {new Date(author.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
