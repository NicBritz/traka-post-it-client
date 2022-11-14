import ProfileImage from "../Components/ProfileImage";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-700 h-14 w-screen">
      <div className="max-w-7xl flex justify-around items-center mx-auto h-full">
        <ProfileImage />
        <p>search</p>
        <p>create post</p>
      </div>
    </header>
  );
};

export default Header;
