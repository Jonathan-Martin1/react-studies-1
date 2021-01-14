import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/icon11.png';
import profile2 from './image/icon7.png';
import profile3 from './image/icon3.png';
import UserCard from './UserCard';

const App = () =>{
 return(
   <div className='ui comments'>
    <UserCard>
     <div>
      Hello my name is bob, and i live in florida.
     </div>
    </UserCard>
    <UserCard>
     <SingleComment 
     language= 'Java' 
     date='Today at 5:00PM' 
     image={profile1} 
     message='I passed my interview.'
     />
    </UserCard>
    <UserCard>
    <SingleComment 
    language= 'Python' 
    date='Today at 6:00PM' 
    image={profile2} 
    message='So did I.'
    />
    </UserCard>
    <UserCard>
    <SingleComment 
    language= 'C++' 
    date='Today at 7:00PM' 
    image={profile3} 
    message='Congradulations!'
    />
    </UserCard>
  </div>
 )
}

ReactDOM.render(
 <App />,
 document.querySelector('#root')
)