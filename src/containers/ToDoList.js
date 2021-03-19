import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

const ToDoList = ({todos}) => {
  const toDisplay = todos.map(todo => 
    <Todo
      key={todo.id}
      {...todo}
    />
  )

  return (
    <ul>
      {toDisplay}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)
