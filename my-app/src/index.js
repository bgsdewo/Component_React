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
  return <footer>{new Date().getFullYear()} Warteg Padang</footer>;
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
