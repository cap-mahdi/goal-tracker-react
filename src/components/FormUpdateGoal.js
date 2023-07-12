import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Step } from "./Step";

export function FormUpdateGoal({ goal, onUpdateGoal, onClose }) {
  const [steps, setSteps] = useState(goal.steps);
  let stepsDone = steps.length;
  for (let i = 0; i < steps.length; i++) {
    if (!steps[i].done) {
      stepsDone = i;
      break;
    }
  }

  function handleToggleStep(index) {
    if (index === stepsDone - 1) {
      setSteps((curr) =>
        curr.map((step, i) =>
          i === index ? { ...step, done: !step.done } : step
        )
      );
      return;
    }
    if (index === stepsDone) {
      setSteps((curr) =>
        curr.map((step, i) => (i === index ? { ...step, done: true } : step))
      );
      return;
    }
  }

  function updateGoal() {
    onUpdateGoal({ ...goal, steps });
  }

  return (
    <div className="popup">
      <form
        className="popup-content form-update-goal"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>{goal.title}</h1>
        <div className="steps">
          {steps.map((step, index) => (
            <Step
              index={index}
              step={step}
              key={step.id}
              onToggleStep={handleToggleStep}
            />
          ))}
        </div>
        <div className="buttons">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={updateGoal}>Update</Button>
        </div>
      </form>
    </div>
  );
}
