import React from "react";
import ReactDOM from "react-dom/client";
//diluar component
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
  //internal style
  const style = {
    color: "orange",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return (
    <main className="menu">
      <h2 style={style}>Menu kita</h2>
      <Food
        nama="Nasi Goreng"
        deskripsi="Nasi goreng merupkan khas indonesia"
        harga={25000}
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        deskripsi="Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
        harga={15000}
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food />
    </main>
  );
}

function Food(props) {
  return (
    <div className="food">
      <img src={props.foto} alt={props.nama} width={100} height={70} />
      <div>
        <h3>{props.nama}</h3>
        <p>{props.deskripsi}</p>
        <span>{props.harga}</span>
      </div>
    </div>
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
    <footer className="footer">
      {new Date().getFullYear()} Warteg Padang | jamBuka {jamBuka} - jamTutup
      {jamTutup}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
