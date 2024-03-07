import React from 'react'
import ToDos from './components/ToDos'
import AddToDo from './components/AddToDo'
import './App.css'
import { useState } from 'react'

const App = () => {
  return (
    <>
      <h1>Learning Redux</h1>
      <AddToDo />
      <ToDos />
    </>
  )
}

export default App