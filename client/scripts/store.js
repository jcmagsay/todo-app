import TodoService from 'services/TodoService';
const service = new TodoService();

function fetch(item, scope) {
  service.getAll().then(data => {
    let ids = data.map(item => item.id);
    let nextId = Math.max.apply(null, ids) + 1;
    sessionStorage.setItem('store', JSON.stringify(data));
    scope.setState({[`${item}`]: data });
    sessionStorage.setItem('nextId', nextId);
  });
}

function addItem(text) {
  let store = JSON.parse(sessionStorage.getItem('store'));
  const newItem = {
    id: nextId,
    description: text,
    done: false
  };
  let newStore = store.concat(newItem);
  sessionStorage.setItem('store', JSON.stringify(newStore));

  let nextId = Number(sessionStorage.getItem('nextId')) + 1;
  sessionStorage.setItem('nextId', nextId)
}

function toggleItem(item) {
  let store = JSON.parse(sessionStorage.getItem('store'));

  let newStore = store.map(todo => {
    if (todo.id === item.props.id){
      todo.done = !todo.done
    }
    return todo;
  });

  sessionStorage.setItem('store', JSON.stringify(newStore));
}

function deleteItem(id) {
  let store = JSON.parse(sessionStorage.getItem('store'));
  let newStore = store.filter(item => item.id != id);

  sessionStorage.setItem('store', JSON.stringify(newStore));
}

function refresh(item, scope) {
  let store = JSON.parse(sessionStorage.getItem('store'));
  scope.setState({[`${item}`]: store });
}

export function dispatch(event, item, scope) {
  switch (event) {
    case 'ADD':
      addItem(item, scope);
      break;
    case 'FETCH':
      fetch(item, scope);
      break;
    case 'REFRESH':
      refresh(item, scope);
      break;
    case 'DELETE':
      deleteItem(item, scope);
      break;
    case 'TOGGLE':
      toggleItem(item);
      break;
    default:
      return;
  }
}
