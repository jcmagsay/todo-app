import React, {Component} from 'react';
import TodoList from 'components/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'todos': []
    };

    this.storeUpdate = this.storeUpdate.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    this.props.store.dispatch('FETCH', 'todos', this)
  }

  storeUpdate(item) {
    this.props.store.dispatch('TOGGLE', item)
    this.props.store.dispatch('REFRESH', 'todos', this)
  }

  render() {
    if (this.state.todos.length) {
      return(
        <TodoList
          store={this.props.store}
          todos={this.state.todos}
          update={this.storeUpdate}
        />
      )
    } else {
      return(
        <div>No todos found at this time.</div>
      );
    }

  }
}
