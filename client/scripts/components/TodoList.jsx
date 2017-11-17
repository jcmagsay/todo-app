import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetch, add} from 'actions/index';
import PropTypes from 'prop-types'

import Card from 'components/card';
import Checkbox from 'components/checkbox';

class TodoList extends Component {
  constructor(todos, handleOnClick) {
    super(todos, handleOnClick);
  }

  componentWillReceiveProps(props) {
    debugger
  }

  render() {
    debugger;
    if (typeof todos === 'undefined') return (<div>No todos available</div>);

    return(
      <ul>
        {todos.map(todo =>
          <li key={`todo-${todo.id}`}>
            <Card
              description={todo.description}
              done={todo.done}
            >
              <Checkbox
                id={todo.id}
                description={todo.description}
                done={todo.done}
                handleChange={this.updateTodo}
              />
            </Card>
          </li>
        )}
      </ul>
    );
  }
}

export default TodoList
