import React from 'react'
import { useState } from 'react'
import Searchbar from './Searchbar'

function TodoList() {
    const [todos, setTodos] = useState([])
    
    const addToDo = todo => {
        const newToDo = [todo, ...todos]
        setTodos(newToDo)
        console.log(...todos)
    }
  return (
      <div>
          <div>
              <h1>What do we need to get done?</h1>
              <Searchbar onSubmit={addToDo} />
          </div>
    </div>
  )
}

export default TodoList