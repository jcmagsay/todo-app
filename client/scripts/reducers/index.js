const reducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'FETCH':
        return action.data;
      case 'REMOVE':
        return state.filter(todo => {
          if (todo.id !== action.id) return todo;
        })
      case 'TOGGLE':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
};

export default reducer;
