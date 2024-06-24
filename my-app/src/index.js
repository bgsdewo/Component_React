import React from "react";
import ReactDOM from "react-dom/client";

//merupakan component utama
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warteg Padang</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Menu kita</h2>
      <Food />
      <Food />
      <Food />
    </div>

    //ini gabisa
    // <div>
    //   <h2>Menu kita</h2>
    //   <Food />
    //   <Food />
    //   <Food />
    // </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg tutup");
  } else {
    alert("Warteg Buka");
  }
  return (
    <footer>
      {new Date().getFullYear()} Warteg Padang | jamBuka {jamBuka} - jamTutup
      {jamTutup}
    </footer>
  );
}
function Food() {
  return (
    <div>
      <img src="food/bakso.jpg" alt="" width={100} height={70} />
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
