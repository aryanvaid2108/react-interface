import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';
import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper.js'
import 'bootstrap/dist/js/bootstrap.js';

render(
   <App />
, document.getElementById("root"));


