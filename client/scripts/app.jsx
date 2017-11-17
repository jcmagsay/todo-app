import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetch, add} from 'actions/index';

import FilterableTodoList from 'containers/FilterableTodoList'

const App = () => (
  <FilterableTodoList />
);

export default App;


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       'todos': []
//     };
//
//     this.updateTodo = this.updateTodo.bind(this);
//     this.todoService = new TodoService();
//   }
//
//   componentDidMount() {
//     this.getTodos();
//   }
//
//
//   getTodos() {
//     this.todoService.getAll()
//       .then(todos => {
//         todos.forEach(todo => this.props.store.dispatch(add(todo)));
//       });
//     debugger;
//   }
//
//   updateTodo(item) {
//     this.props.store.dispatch(add)
//   }
//
//   _renderTodos() {
//     return this.state.todos.map(todo => {
//       return (
//         <li key={`todo-${todo.id}`}>
//           <Card
//             description={todo.description}
//             done={todo.done}
//           >
//             <Checkbox
//               id={todo.id}
//               description={todo.description}
//               done={todo.done}
//               handleChange={this.updateTodo}
//             />
//           </Card>
//         </li>
//       )
//     });
//   }
//
//   render() {
//     if (this.state.todos.length) {
//       return([
//         <main key="main">
//           <ul>
//             {this._renderTodos()}
//           </ul>
//         </main>
//       ]);
//     } else {
//       return(
//         <div>No todos found at this time.</div>
//       );
//     }
//
//   }
// }
