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
  // const foods = [];
  const foods = data;
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
        //react fragment
        <>
          <p>
            Aneka makanan ikan bakarAneka makanan ikan bakarAneka makanan ikan
            bakarAneka makanan ikan bakarAneka makanan ikan bakarAneka makanan
            ikan bakar
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong datanya</p>
      )}
    </main>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 19;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour < jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

//bisa melakukan destructing pada parameter ini dengan catatan data ini langsung ditampilkan
//alias tidak harus diolah lagi!
function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Padang | Jam Buka {jamBuka} - Jam
          Tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>Maaf, masih tutup. Silakan datang lagi di jam {jamBuka}</p>
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
