import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleExercise from "./singleExercise";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/exercises/${id}`)
      .then()
      .catch((err) => console.log(err));

    const newExercises = exercises.filter((exercise) => exercise._id !== id);
    setExercises(newExercises);
  };

  return (
    <>
      <h3>Exercise List!</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <td>Username</td>
            <td>Description</td>
            <td>Duration</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            return (
              <SingleExercise
                key={exercise._id}
                exercise={exercise}
                onDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ExerciseList;
