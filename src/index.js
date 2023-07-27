import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Update from "./component/Update";
import Delete from "./component/Delete";
import Create from "./component/Create";
import Detail from "./component/Detail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/update/:id"} element={<Update/>}></Route>
                <Route path={"/delete/:id"} element={<Delete/>}></Route>
                <Route path={"/create"} element={<Create/>}></Route>
                <Route path={"/view/:id"} element={<Detail/>}></Route>
            </Routes>

        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
