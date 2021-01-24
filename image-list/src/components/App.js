import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
 state = { images: []}

   onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=20010982-ade9eaec55e04821eeb5aa6a9&q=${entry}&image_type=photo&pretty=true`)
    this.setState({images: response.data.hits})
 }
 render(){
  return(
   <div className='ui container' style={{marginTop:'30px'}}>
    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
    <ImageList images={this.state.images}/>
   </div>
  )
 }
}

export default App;


