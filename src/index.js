import React from 'react';  /*react is a 'view' library, its core of the package that does DOM manipulation*/

import ReactDOM from 'react-dom'; /*'ReactDom'is a library that is exclusively used for websites, it changes according to what kind of screen we use'*/
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'tachyons'; /*An awesome pakage that has predefine classes that can perform  css effects*/
import App from './containers/App.js'
ReactDOM.render(
  <React.StrictMode>
	<App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
