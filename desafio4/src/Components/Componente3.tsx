import React from "react";
import {elio, eldinho, CeJota} from "../img"
const Componente3 = () => {
  
  return (<div style={{display: "flex"}} >
    <img style={{width: "240px", height: "240px"}} src={eldinho}/>
    <img style={{width: "240px", height: "240px", margin: "0 80px"}} src={CeJota}/>
    <img style={{width: "240px", height: "240px"}} src={elio}/>
  </div>);
};

export default Componente3;
