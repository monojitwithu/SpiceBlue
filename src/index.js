import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hom from "./styles/Main.scss"
import Home from './coponents/home/Home';
import {Provider} from "react-redux"
import rStore from './Store'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={rStore()}>
    <Home/>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
