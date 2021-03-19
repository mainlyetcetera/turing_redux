import React from 'react'

const Todo = ({ text, completed }) => (
  <div>
    <p>{text}</p>
    <input
      type='checkbox'
      defaultChecked={completed}
    />
  </div>
)

export default Todo
