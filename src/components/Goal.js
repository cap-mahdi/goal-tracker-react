import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { PercentageCircle } from "./PercentageCircle";
import { FormUpdateGoal } from "./FormUpdateGoal";

export function Goal({ goal, onUpdateGoal, onDeleteGoal }) {
  const [isFormUpdateGoalOpen, setIsFormUpdateGoalOpen] = useState(false);
  const { title, steps, date } = goal;
  let doneSteps = steps.length;
  for (let i = 0; i < steps.length; i++) {
    if (!steps[i].done) {
      doneSteps = i;
      break;
    }
  }
  const percentage = Math.round((doneSteps / steps.length) * 100);
  let classApplied = "";
  if (percentage <= 25) classApplied = "red";
  else if (percentage <= 50) classApplied = "yellow";
  else if (percentage <= 75) classApplied = "blue";
  else classApplied = "green";

  function handleUpdateGoal(newGoal) {
    onUpdateGoal(goal.id, newGoal);
    setIsFormUpdateGoalOpen(false);
  }

  function closeForm() {
    setIsFormUpdateGoalOpen(false);
  }
  return (
    <div className="goal">
      {isFormUpdateGoalOpen && (
        <FormUpdateGoal
          goal={goal}
          onUpdateGoal={handleUpdateGoal}
          onClose={closeForm}
        />
      )}
      <hr className={classApplied}></hr>
      <div className="buttons">
        <Button onClick={() => setIsFormUpdateGoalOpen(true)}>
          <i className="fa-sharp fa-solid fa-pen"></i>
        </Button>
        <Button onClick={() => onDeleteGoal(goal.id)}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </Button>
      </div>

      <PercentageCircle percentage={percentage} />
      <h1 className="title">{title}</h1>
      <p className="targets">
        {doneSteps}/{steps.length} targets
      </p>
      <p className="data">
        {date.toLocaleString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
    </div>
  );
}
