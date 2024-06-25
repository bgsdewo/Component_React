import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";
import "./index.css";

//merupakan component utama
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ color: "red", fontSize: "50px", textTransform: "uppercase" }}>
      Warteg Padang
    </h1>
  );
}
function Menu() {
  const foods = [];
  // const foods = data;
  const numFoods = foods.length;
  const style = {
    color: "orange",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return (
    <main className="menu">
      <h2 style={style}>Menu kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {data.map((food) => (
            <Food foodObj={food} key={food.nama} />
          ))}
        </ul>
      ) : (
        <p>Kosong datanya</p>
      )}
    </main>
  );
}

function Food(props) {
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={100}
        height={70}
      />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 14;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka || hour > jamTutup;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warung Padang | jam Buka {jamBuka} -
            jamTutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Maaf masih tutup coba datang lagi di jam {jamBuka}</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
