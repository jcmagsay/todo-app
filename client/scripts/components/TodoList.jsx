import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Card from 'components/card';
import Checkbox from 'components/checkbox';

export default class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ul>
        {this.props.todos.map(todo =>
          <li key={`todo-${todo.id}`}>
            <Card
              {...this.props}
              description={todo.description}
              done={todo.done}
            >
              <Checkbox
                {...this.props}
                id={todo.id}
                description={todo.description}
                done={todo.done}
              />
            </Card>
          </li>
        )}
      </ul>
    );
  }
}
