import React from "react";
import { Goal } from "./Goal";

export function ListGoals({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div className="goals">
      {goals.map((goal) => (
        <Goal
          goal={goal}
          key={goal.id}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </div>
  );
}
