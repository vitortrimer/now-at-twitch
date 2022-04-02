import React, { useState } from "react";

function Register({ updateUsername }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUsername(username);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeUsername}
          placeholder="E.g. vriito"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Register;
