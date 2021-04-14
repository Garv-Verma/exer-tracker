import React from "react";
import { Link } from "react-router-dom";

function SingleExercise({ exercise, onDelete }) {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/update/${exercise._id}`}>edit </Link> |
        <button className="btn btn-link" onClick={() => onDelete(exercise._id)}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default SingleExercise;
