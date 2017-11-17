import { connect } from 'react-redux';
import { toggleComplete } from 'actions/index';
import TodoList from 'components/TodoList';
import TodoService from 'services/todo-service';

const todoServices = new TodoService();

const getAllTodos = (todos) => {
  return todos
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  onTodoClick: toggleComplete
}

const FilterableTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default FilterableTodoList;
