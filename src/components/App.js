import React from "react";
import Goals from "../Goals-data";
import { useState } from "react";
import { Button } from "./Button";
import { ListGoals } from "./ListGoals";
import { FormAddGoal } from "./FormAddGoal";
function App() {
  const [isFormAddGoalOpen, setIsFormAddGoalOpen] = useState(false);
  const [goals, setGoals] = useState(Goals);
  const goalsDone = goals.filter(
    (goal) => goal.steps.filter((step) => !step.done).length === 0
  ).length;
  function handleOpenFormAddGoal() {
    if (isFormAddGoalOpen) return;
    setIsFormAddGoalOpen(true);
  }
  function handleCloseFormAddGoal() {
    if (!isFormAddGoalOpen) return;
    setIsFormAddGoalOpen(false);
  }
  function handleUpdateGoal(id, newGoal) {
    setGoals((curr) => curr.map((goal) => (goal.id === id ? newGoal : goal)));
  }
  function handleDeleteGoal(id) {
    setGoals((curr) => curr.filter((goal) => goal.id !== id));
  }
  function handleAddGoal(newGoal) {
    setGoals((curr) => [...curr, newGoal]);
    handleCloseFormAddGoal();
  }
  return (
    <div className="app">
      {isFormAddGoalOpen && (
        <FormAddGoal
          onCloseFormAddGoal={handleCloseFormAddGoal}
          onAddGoal={handleAddGoal}
        />
      )}
      <div className="header">
        <h1>Goal Tracker</h1>
        <h2>
          {goalsDone}/{goals.length} Goals
        </h2>
        <Button onClick={handleOpenFormAddGoal}>Add Goal</Button>
      </div>
      <ListGoals
        goals={goals}
        onUpdateGoal={handleUpdateGoal}
        onDeleteGoal={handleDeleteGoal}
      />
    </div>
  );
}

export default App;
