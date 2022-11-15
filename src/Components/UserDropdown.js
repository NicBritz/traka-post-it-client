import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../Utils/reducer";
import { RiArrowDropDownLine } from "react-icons/ri";

const UserDropdown = ({ users }) => {
  const dispatch = useDispatch();

  const guestUser = {
    _id: -1,
    username: "guest",
    imageUrl: "https://robohash.org/guest",
  };

  const [showMenu, setShowMenu] = useState(false);
  const [userProfile, setUserProfile] = useState(guestUser);

  function handleSelectUser(user) {
    dispatch(setCurrentUser(user._id));
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
        {userProfile.username}
        <RiArrowDropDownLine className="w-7 h-7" />
      </button>

      {showMenu && (
        <div className="absolute z-10  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li onClick={() => handleSelectUser(guestUser)}>
              <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                guest
              </p>
            </li>
            {users.map((user) => {
              return (
                <li onClick={() => handleSelectUser(user)} key={user._id}>
                  <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {user.username}
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
