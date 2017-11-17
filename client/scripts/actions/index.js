let nextTodoId = 0

export const add = (text) => ({
  type: 'ADD',
  id: nextTodoId++,
  text
})

export const fetch = (todos) => {
  return ({
    type: 'FETCH',
    todos: todos
  })
}

export const remove = (id) => ({
  type: 'REMOVE',

})

export const updateDescription = (description) => ({
  type: 'UPDATE_DESCRIPTION',
  description
})

export const toggleComplete = (id) => ({
  type: 'COMPLETE',
  id
})
