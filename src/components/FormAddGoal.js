import React from "react";
import { useState } from "react";
import { Button } from "./Button";

export function FormAddGoal({ onCloseFormAddGoal, onAddGoal }) {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState("");

  function handleAddStep(e) {
    if (e.key !== "Enter" || step === "") return;
    setSteps([
      ...steps,
      {
        id: crypto.getRandomValues(new Uint32Array(10)),
        title: step,
        done: false,
      },
    ]);
    setStep("");
  }

  function handleDeleteStep(id) {
    setSteps((curr) => curr.filter((step) => step.id !== id));
  }

  function handleCloseForm() {
    // setSteps([]);
    // setTitle("");
    // setStep("");
    onCloseFormAddGoal();
  }

  function handleAddGoal() {
    if (title === "" || steps.length === 0) return;
    onAddGoal({
      id: crypto.getRandomValues(new Uint32Array(10)),
      title,
      steps,
      date: new Date(),
    });
  }
  return (
    <div className="popup">
      <form
        className="popup-content form-add-goal"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Set a new Goal !</h1>
        <div className="input">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Steps</label>
          <input
            type="text"
            value={step}
            onChange={(e) => setStep(e.target.value)}
            onKeyDown={handleAddStep}
          />
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.id}>
              <p>
                {index < 9 ? `0${index + 1}` : index}- {step.title}
              </p>
              <span onClick={() => handleDeleteStep(step.id)}>
                <i className="fa-sharp fa-solid fa-trash"></i>
              </span>
            </div>
          ))}
        </div>
        <div className="buttons">
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleAddGoal}>Add</Button>
        </div>
      </form>
    </div>
  );
}
