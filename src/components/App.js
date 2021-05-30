import React from 'react';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import ImageList from './ImageList.js';
import ButtonComponent from './ButtonsComponent.js';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images :[],inputValue:"",view:'grid',listButton:'secondary',gridButton:'primary'}
        this.searchInputRef = React.createRef();
        this.imageListRef = React.createRef();
        this.buttonComponentRef = React.createRef();
    }
    onGridClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:'primary',listButton:'secondary'})
        this.imageListRef.current.setState({view:'grid'})
    }
    onListClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:'secondary',listButton:'primary'})
        this.imageListRef.current.setState({view:'list'})
    }
    onSearchSubmit= async (entry)=>{
        //console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${entry.replace(" ","+")}&image_type=photo`)
        //console.log(response.data.hits)
        this.imageListRef.current.setState({images:response.data.hits,inputValue:entry})
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'30px'}}>
            
            <div  className="ui huge header" style={{marginLeft:'auto',marginRight:'auto'}}>Image Search</div>
            <SearchInput ref={this.searchInputRef}  onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='category'/>
            <ButtonComponent onGridClick={this.onGridClick} onListClick={this.onListClick} ref={this.buttonComponentRef} defaultButton='grid'/>
            <ImageList ref={this.imageListRef} searchInputRef={this.searchInputRef}   images={this.state.images} inputValue={this.state.inputValue} view = {this.state.view}/>
        </div>
    )
    }
}

export default App;