import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
 const buttonText = {text: 'submit'};
 return(
  <div>
    <label htmlFor='name' classnames='label'>enter e-main</label>
    <input id='name' type='text'/>
    <button style={{backgroundColor: 'red', color: 'white' }}>{buttonText.text}</button>
  </div>
 )
}

ReactDom.render(
 <App />,
 document.querySelector('#root')
)