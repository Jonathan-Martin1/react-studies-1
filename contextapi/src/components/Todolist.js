import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Todolist extends React.Component {
  static contextType = ThemeContext
  render() {
    const { isDarkTheme, lightTheme, darkTheme } = this.context
    const theme = isDarkTheme ? darkTheme : lightTheme
    return (
      <div className='ui list'>
        <p className='item'>Plan the family trip</p>
        <p className='item'>Go shopping</p>
        <p className='item'>Go fishing</p>
      </div>
    )
  }
}
export default Todolist
