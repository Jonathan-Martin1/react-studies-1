import React from 'react'

class Todolist extends React.Component {
  render() {
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
