import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  let [username, setUsername] = useState();

  useEffect(() => {
    console.log("worked");

    setUsername(localStorage.getItem("twitch-user"));
  }, []);

  const updateUsername = (newUsername) => {
    console.log("new username ", newUsername);

    localStorage.setItem("twitch-user", newUsername);
    setUsername(newUsername);
  };

  return (
    <div className="App">
      {!username || username === "" ? (
        <Register updateUsername={updateUsername} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
