import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import CardList from './components/CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import { robots } from './robots'; demo

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Card />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();