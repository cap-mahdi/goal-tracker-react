import React from "react";

export function PercentageCircle({ percentage }) {
  let classApplied = "";
  if (percentage <= 25) classApplied = "red";
  else if (percentage <= 50) classApplied = "yellow";
  else if (percentage <= 75) classApplied = "blue";
  else classApplied = "green";
  return (
    <div className={`c100 p${percentage} center ${classApplied}`}>
      <span>{percentage}%</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  );
}
