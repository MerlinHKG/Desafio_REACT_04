import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Componente1 from "./Components/Component1";
import Componente2 from "./Components/Componente2";
import Componente3 from "./Components/Componente3";

const style = {
  background: {
    background: "linear-gradient(45deg, #000000, #6dfbe3)",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vh",
    padding: "0",
    margin: "0",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    backgroundColor: "white",
    paddingBottom: "20px",
  },
  separamento: {
    margin: "0 5px",
    textDecoration: "none",
    color: "black",
  },
  center2: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  }
};

function App() {
  return (
    <div style={style.background}>
      <div style={style.center}>
        <Link style={style.separamento} to="contador">
          Contador&nbsp; |
        </Link>
        <Link style={style.separamento} to="weather">
          Weater&nbsp; |
        </Link>
        <Link style={style.separamento} to="easteregg">
          Dedicado ao Elinho
        </Link>
      </div>
      <div style={style.center2}>
      <Routes>
        <Route path="contador" element={<Componente1 />} />
        <Route path="weather" element={<Componente2 />} />
        <Route path="easteregg" element={<Componente3 />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
