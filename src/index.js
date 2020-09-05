import { render } from "react-dom";
import React from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import "./css/main.css";
function App() {
  return (
    <div>
      <SortingVisualizer />
    </div>
  );
}

render(<App />, document.getElementById("root"));
