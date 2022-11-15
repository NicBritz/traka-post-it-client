import { useEffect, useState } from "react";
import Header from "./Layouts/Header";
import { useSelector } from "react-redux";

function App() {
  const currentUserId = useSelector((state) => state.globalReducer.currentUser);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://traka-postit-server.onrender.com/api/users"
      );
      //failed response
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const users = await response.json();
      setUsers(users);
    }

    getUsers();
    return;
  }, [users.length]);

  // sets the current user
  const currentUser = users?.filter((user) => user._id === currentUserId)[0];

  return (
    <>
      <Header users={users} currentUser={currentUser} />
      <div className="max-w-3xl mx-auto w-screen h-screen"></div>
    </>
  );
}

export default App;
