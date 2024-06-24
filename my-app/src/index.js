import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Halo,React</h1>
      <Food />
    </div>
  );
}
function Food() {
  return (
    <div>
      <img src="food/bakso.jpg" alt="" />
      <h2>Bakso Betawi</h2>
      <p>Bakso Betawi khas mama lala</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
