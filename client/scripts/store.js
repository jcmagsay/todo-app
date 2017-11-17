import TodoService from 'services/TodoService';
const service = new TodoService();

function fetch(item, scope) {
  service.getAll().then(data => {
    sessionStorage.setItem('store', JSON.stringify(data));
    scope.setState({[`${item}`]: data });
  });
}

function updateCollection(item) {
  let store = JSON.parse(sessionStorage.getItem('store'));

  let newStore = store.map(todo => {
    if (todo.id === item.props.id){
      todo.done = !todo.done
    }
    return todo;
  });

  sessionStorage.setItem('store', JSON.stringify(newStore));
}

function refresh(item, scope) {
  let store = JSON.parse(sessionStorage.getItem('store'));
  scope.setState({[`${item}`]: store });
}

export function dispatch(event, item, scope) {
  switch (event) {
    case 'FETCH':
      fetch(item, scope);
      break;
    case 'REFRESH':
      refresh(item, scope);
      break;
    case 'TOGGLE':
      updateCollection(item);
      break;
    default:
      return;
  }
}
