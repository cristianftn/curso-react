import React from 'react';
import ReactDOM  from 'react-dom';
import PrimerApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';





const divRoot = document.querySelector('#root')


ReactDOM.render(
                <>
                 {/* <PrimerApp saludo="Hola soy cristian"/>*/}  
                    <CounterApp value= {10} />
                </>,
                 divRoot)