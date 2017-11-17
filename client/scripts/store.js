import TodoService from 'services/TodoService';
const service = new TodoService();

/**
 * Const that maps to all the keys held in the store
 */
const SESSION_STORAGE = {
  'STORE': 'store',
  'NEXT_ID': 'nextId'
}

/**
 * Fetches static data store on page load
 *
 * @param {App} scope [context is to App.jsx]
 * @param {Object} stateKey [key that will be used to map the fetched data]
 * @method fetch
 */
const fetch = (stateKey, scope) => {
  service.getAll().then(data => {
    let ids = data.map(item => item.id);
    let nextId = Math.max.apply(null, ids) + 1;

    scope.setState({[`${stateKey}`]: data });

    setItem(SESSION_STORAGE.STORE, data);
    setItem(SESSION_STORAGE.NEXT_ID, nextId);
  });
}

/**
 * Get's the true state of data within the data store
 *
 * @method getStore
 */
const getStore = () => {
  return JSON.parse(sessionStorage.getItem(SESSION_STORAGE.STORE));
}

/**
 * Determines the next id based on the currently largest id within the store
 *
 * @method getNextId
 */
 const getNextId = () => {
  return Number(sessionStorage.getItem(SESSION_STORAGE.NEXT_ID));
}

/**
 * Sets a key/val pair within the data store
 *
 * @param {string} key [the key that will be set to map data back to the data store]
 * @param {Object} value [the data that will be mapped back to the matching key in the data store]
 * @method setItem
 */
const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * Adds an item to the data store
 *
 * @param {string} text [Text value that will be added to a new item in the data store]
 * @method addItem
 */
const addItem = (text) => {
  const newItem = {
    id: sessionStorage.getItem(SESSION_STORAGE.NEXT_ID),
    description: text,
    done: false
  };
  let updatedStore = getStore().concat(newItem);
  setItem(SESSION_STORAGE.STORE, updatedStore)
  setItem(SESSION_STORAGE.NEXT_ID, getNextId() + 1)
}

/**
 * Toggles the status/done value of an existing item
 *
 * @param {Object} item [item in which the done value will be updated]
 * @method toggleItem
 */
const toggleItem = (item) => {
  let updatedStore = getStore().map(todo => {
    if (todo.id === item.props.id){
      todo.done = !todo.done
    }
    return todo;
  });

  setItem(SESSION_STORAGE.STORE, updatedStore);
}

/**
 * Deletes an existing item from the data store
 *
 * @param {string} id [id of the item that will be deleted from the data store]
 * @method deleteItem
 */
const deleteItem = (id) => {
  let updatedStore = getStore().filter(item => item.id != id);

  setItem(SESSION_STORAGE.STORE, updatedStore);
}

/**
 * Refreshes the data store
 *
 * @param {App} scope [context is to App.jsx]
 * @param {Object} stateKey [key that will be used to map the fetched data]
 * @method refresh
 */
const refresh = (stateKey, scope) => {
  scope.setState({[`${stateKey}`]: getStore() });
}

/**
 * Deletes an existing item from the data store
 *
 * @param {Object} data [id of the item that will be deleted from the data store]
 * @method updateItem
 */
const updateItem = (data) => {
  let updatedStore = getStore().map(todo => {
    if (todo.id === data.item.props.id){
      todo.description = data.description
    }
    return todo;
  });

  setItem(SESSION_STORAGE.STORE, updatedStore);
}

/**
 * Dispatch will call the approriate respons upon being fired off
 *
 * @param {string} event [String that will determine which event will be fired]
 * @param {Object} item [Can be either a state key or an object that is used to update items in the data store]
 * @param {Object} scope [Typically points back to the App.jsx to reset the data]
 * @method dispatch
 */
export function dispatch(event, item, scope) {
  switch (event) {
    case 'ADD':
      addItem(item);
      break;
    case 'FETCH':
      fetch(item, scope);
      break;
    case 'REFRESH':
      refresh(item, scope);
      break;
    case 'DELETE':
      deleteItem(item);
      break;
    case 'TOGGLE':
      toggleItem(item);
      break;
    case 'UPDATE':
      updateItem(item);
      break;
    default:
      return;
  }
}
