export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.todo, text: action.todo, completed: false }]
    default:
      return state
  }
}
