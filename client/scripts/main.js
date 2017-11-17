import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoService from 'services/todo-service';
import reducer from 'reducers/index';
// styles
import 'styles/reset.css';
import 'styles/elements.css';
// app
import App from 'scripts/app';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch({ type: 'ADD', text: 'blah blah blah' })
