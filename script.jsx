// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import './style.css'



const name = 'Probando IMGur';
const title = <h1>Hello, {name}</h1>;

const src = './imgs/209_031529SierraNevada.jpg';
const imagen = <img src={src}></img>;


let req = XMLHttpRequest();



ReactDOM.render(
  imagen,
  document.getElementById('imagen')
);

ReactDOM.render(
  title,
  document.getElementById('titulo')
);
