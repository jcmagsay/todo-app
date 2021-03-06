import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TodoCard from 'components/TodoCard';

export default class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ul>
        {this.props.todos.map(todo =>{
          return (<li key={`todo-${todo.id}`}>
            <TodoCard
              {...this.props}
              id={todo.id}
              description={todo.description}
              done={todo.done}
            />
          </li>)}
        )}
      </ul>
    );
  }
}
