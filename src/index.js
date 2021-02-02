import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,   Switch,   Route } from "react-router-dom";
import Registro from './components/Registro';
import Chain from './components/chain';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/registro">
            <Registro />
          </Route>
          <Route exact path="/chain">
            <Chain/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
