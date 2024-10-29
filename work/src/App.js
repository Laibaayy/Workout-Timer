import "./App.css";
import { useState } from "react";
import Workoutbox from "./Components/Workoutbox";
import Form from "./Components/Form";
import Toggelalarm from "./Components/Toggelalarm";

function App() {
  const partOfDay = "AM";
  const workouts = [
    {
      name: "Full-body workout",
      numExercises: partOfDay === "AM" ? 9 : 8,
    },
    {
      name: "Arms + Legs",
      numExercises: 6,
    },
    {
      name: "Arms only",
      numExercises: 3,
    },
    {
      name: "Legs only",
      numExercises: 4,
    },
    {
      name: "Core only",
      numExercises: partOfDay === "AM" ? 5 : 4,
    },
  ];

  const [number, setnumber] = useState(workouts.at(0).numExercises);
  const [allowSound, setAllowSound] = useState(true);

  return (
    <div className="data">
      <Toggelalarm allowSound={allowSound} setAllowSound={setAllowSound} />
      <Workoutbox />
      <Form
        workouts={workouts}
        setnumber={setnumber}
        number={number}
        allowSound={allowSound}
      />
    </div>
  );
}

export default App;
