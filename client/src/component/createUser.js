import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };
    console.log(user);

    axios
      .post("http://localhost:8000/users/add", user)
      .then(alert("User Added!"))
      .catch((err) => console.log(err));

    setUsername("");
  };

  return (
    <>
      <h3>Create User Part</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </>
  );
}

export default CreateUser;
