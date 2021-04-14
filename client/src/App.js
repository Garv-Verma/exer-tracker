import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./component/navBar";
import ExerciseList from "./component/exerciseList";
import CreateExercise from "./component/createExercise";
import UpdateExercise from "./component/updateExercise";
import CreateUser from "./component/createUser";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/update/:id" component={UpdateExercise} />
          <Route path="/user" component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
