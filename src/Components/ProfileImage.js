const ProfileImage = ({
  userProfile = { username: "guest", imageUrl: "https://robohash.org/guest" },
}) => {
  return (
    <img
      className=" w-10 h-10 bg-slate-200 rounded-full"
      src={userProfile.imageUrl}
      alt={`${userProfile.username} profile`}
    />
  );
};

export default ProfileImage;
