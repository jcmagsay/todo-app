import React from 'react'
import { render } from 'react-dom'
// styles
import 'styles/reset.css';
import 'styles/elements.css';
// app
import App from 'scripts/app';
import * as store from 'scripts/store';

render(
  <App store={store} />,
  document.getElementById('root')
)
