import ReactDOM from "react-dom";
import App from './App';
import React from 'react';
import "./index.css";
import { Provider } from 'react-redux'
import {store} from "./store";



ReactDOM.render(
<React.StrictMode>
    <Provider store={store} >
        <App/>
    </Provider>
    </React.StrictMode>
,document.getElementById("root"));