const ProfileImage = ({ username = "guest" }) => {
  return (
    <img
      className=" w-10 h-10 bg-slate-200 rounded-full"
      src={`https://robohash.org/${username}`}
      alt={`${username} profile`}
    />
  );
};

export default ProfileImage;
