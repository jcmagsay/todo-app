import React, {Component} from 'react';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'todos': []
    };

    this.storeAdd = this.storeAdd.bind(this);
    this.storeDelete = this.storeDelete.bind(this);
    this.storeUpdate = this.storeUpdate.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    this.props.store.dispatch('FETCH', 'todos', this)
  }

  storeUpdate(item) {
    this.props.store.dispatch('TOGGLE', item);
    this.props.store.dispatch('REFRESH', 'todos', this);
  }

  storeAdd(text) {
    this.props.store.dispatch('ADD', text);
    this.props.store.dispatch('REFRESH', 'todos', this);
  }

  storeDelete(id) {
    this.props.store.dispatch('DELETE', id);
    this.props.store.dispatch('REFRESH', 'todos', this);
  }

  render() {
    return([
      <AddTodo
        key="add-todo"
        add={this.storeAdd}
      />,
      <TodoList
        key="todo-list"
        delete={this.storeDelete}
        store={this.props.store}
        todos={this.state.todos}
        update={this.storeUpdate}
      />
    ])
  }
}
