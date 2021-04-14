import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UpdateExercise({ match }) {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/exercises/${match.params.id}`)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        const newUsers = res.data.map((user) => user.username);
        setUsers(newUsers);
        // setUsername(newUsers[0]);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    axios
      .post(
        `http://localhost:8000/exercises/update/${match.params.id}`,
        exercise
      )
      .then(alert("Exercise Updated!"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <>
      <h3>Edit Exercise Log!</h3>
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
          Update Exercise!
        </button>
      </form>
    </>
  );
}

export default UpdateExercise;
