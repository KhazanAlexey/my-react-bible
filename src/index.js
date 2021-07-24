import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {App2} from "./components/componentinprops";
import {App3} from "./components/parametsrinhandeler";
import {App4} from "./components/combinedstyles";
import {App5} from "./components/reactfragment";
import {App6} from "./components/reactivitycounter";
import {App7, App8} from "./components/routers";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <App3/>:
        <App2/>
        <App4/>
        <App5/>
        <App6/>
        <App7/>
        <App8/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
