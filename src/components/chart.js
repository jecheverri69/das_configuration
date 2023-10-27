import React from "react";
import { useNavigate } from "react-router-dom";

function Charts() {
const navigate = useNavigate();

  return (
    <div>
      <h1>Charts View</h1>
      <p>This is the charts view.</p>
      <button onClick={() => navigate('/initial')}>
        pasar a initial
      </button>
    </div>
  );
}

export default Charts;
