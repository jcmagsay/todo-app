import React from 'react'
import { render } from 'react-dom'
// styles
import 'styles/reset';
import 'styles/elements';
import 'styles/utilities';
// app
import App from 'scripts/app';
import * as store from 'scripts/store';

render(
  <App store={store} />,
  document.getElementById('root')
)
