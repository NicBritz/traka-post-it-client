import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const UserDropdown = ({ user = "bigfootisreal" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [userProfile, setUserProfile] = useState("guest");

  const users = [
    "guest",
    "harrypoppins",
    "tinfoilhat",
    "bigfootisreal",
    "badkarma",
  ];

  function handleSelectUser(user) {
    console.log("the user is now" + user);
    setUserProfile(user);
    setShowMenu(false);
  }

  return (
    <div className="relative w-26" data-testid="user dropdown">
      <button
        className="text-lg flex items-center text-gray-600 dark:text-white"
        onClick={() => setShowMenu(true)}
        data-testid="user dropdown button"
      >
        {userProfile} <RiArrowDropDownLine className="w-7 h-7" />
      </button>
      {showMenu && (
        <div class="absolute z-10  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            {users.map((user, i) => {
              return (
                <li onClick={() => handleSelectUser(user)} key={i}>
                  <p class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {user}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
