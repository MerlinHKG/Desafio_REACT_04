import React, { useEffect, useState } from "react";
import { Cidade } from "../models/cidade";
import { weather } from "../weatherAPI/weather";

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
};

function Dados() {
  const [dados, setDados] = useState<Cidade>({
    description: "",
  });
  const [info, setInfo] = useState(<p>Aguardando...</p>);
  const [cidade, setCidade] = useState("");

  const getDados = async (city: string) => {
    try {
      const resposta = await weather.getWeather(city);
      setDados(resposta);
    } catch (error) {
      setDados({
        description: "Não Deu",
      });
    }
  };
  useEffect(() => {
    setInfo(<p>{dados.description}</p>);
  }, [dados, cidade]);
  return (
    <div>
      <div style={styles.center}>
      <span>Digite o nome da Cidade</span>
      </div>
      <div style={styles.center}>
        <input
          type="text"
          onChange={(e) => {
            setCidade(e.target.value);
          }}
        />
        <button onClick={() => getDados(cidade)}> Enter </button>
      </div>
      <div style={styles.center}>
        <p>Tempo:</p>
        {info}
      </div>
    </div>
  );
}
export default Dados;
