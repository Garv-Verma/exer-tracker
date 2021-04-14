import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res) => {
      const newUsers = res.data.map((user) => user.username);
      setUsers(newUsers);
      setUsername(newUsers[0]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    axios
      .post("http://localhost:8000/exercises/add", exercise)
      .then(alert("Exercise Added!"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <>
      <h3>Create Exercise Log!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <ReactDatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Exercise!
        </button>
      </form>
    </>
  );
}

export default CreateExercise;
