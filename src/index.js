import React from "react";
import ReacDOM from "react-dom/client";
// import PrimeraApp from "./PrimeraApp";
import { CounterApp } from './CounterApp'
import './index.css'


const divRoot = document.querySelector( '#root' );
// const divTitle = document.querySelector( '#title' )


//ReactDOM.render( <PrimeraApp />, divRoot ); froma antigua de asignar contenido HTML a un elemento

// ReacDOM.createRoot( divRoot ).render(<PrimeraApp saludo="Hola, soy Suan!"/>); 

ReacDOM.createRoot( divRoot ).render(<CounterApp value={ 0 } />); 
// ReacDOM.createRoot( divTitle ).render(<Example />);
