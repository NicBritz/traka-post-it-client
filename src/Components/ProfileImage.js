const ProfileImage = ({
  userProfile = { username: "guest", imageUrl: "https://robohash.org/guest" },
  small,
}) => {
  const size = small ? "w-10 h-10" : "w-12 h-12";
  return (
    <img
      className={`${size} bg-slate-200 rounded-full`}
      src={userProfile.imageUrl}
      alt={`${userProfile.username} profile`}
    />
  );
};

export default ProfileImage;
