import React from "react";
import { useNavigate } from "react-router-dom";

function Initial() {
const navigate = useNavigate();

  return (
    <div>
      <h1>initial View</h1>
      <p>This is the charts view.</p>
      <button onClick={() => navigate('/')}>
        pasar a charts
      </button>
    </div>
  );
}

export default Initial;
