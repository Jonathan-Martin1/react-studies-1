import React from 'react'
import Navbar from './components/Navbar'
import Todolist from './components/Todolist'
import './index.css'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className='App'>
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <Navbar />
          <Todolist />
        </ThemeContextProvider>
      </div>
    </div>
  )
}

export default App
