import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import Postview from './PostView/Postview';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Switch>
    <Route exact path='/' component={LandingPage}/>
    <Route path='/Postview' component={Postview}/>
   </Switch>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
