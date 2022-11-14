import IconButton from "../Components/IconButton";
import ProfileImage from "../Components/ProfileImage";
import UserDropdown from "../Components/UserDropdown";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-700 h-14 w-screen shadow-md">
      <div className="max-w-7xl flex justify-around items-center mx-auto h-full">
        <ProfileImage />
        <UserDropdown />
        <IconButton
          color="green"
          text="Post"
          handler={() => console.log("post clicked")}
        />
      </div>
    </header>
  );
};

export default Header;
