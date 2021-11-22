import React from "react";
import { useState } from "react";

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador1() {
        setContador(contador + 1);
    }

    function adicionarContador10() {
        setContador(contador + 10);
    }

    function adicionarContador100() {
        setContador(contador + 100);
    }

    function diminuirContador1() {
        setContador(contador - 1);
    }

    function diminuirContador10() {
        setContador(contador - 10);
    }

    function diminuirContador100() {
        setContador(contador - 100);
    }

    return (
    <div>
        <div>{contador}</div>
        <button onClick={adicionarContador1}>+1</button>
        <button onClick={adicionarContador10}>+10</button>
        <button onClick={adicionarContador100}>+100</button>
        <button onClick={diminuirContador1}>-1</button>
        <button onClick={diminuirContador10}>-10</button>
        <button onClick={diminuirContador100}>-100</button>
    </div>
    )
}

export default Contador