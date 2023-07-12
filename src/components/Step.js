import React from "react";

export function Step({ step, index, onToggleStep }) {
  return (
    <div className="step">
      <input
        type="checkbox"
        id={step.id}
        value={index}
        checked={`${step.done ? "checked" : ""}`}
        onChange={() => onToggleStep(index)}
      />
      <label for={step.id} className={`${step.done ? "checked" : ""}`}>
        {index < 9 ? `0${index + 1}` : index}- {step.title}
      </label>
    </div>
  );
}
