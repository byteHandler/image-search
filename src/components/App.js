import { render } from '@testing-library/react';
import React from 'react';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import ImageList from './ImageList.js'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images :[],inputValue:"",view:'grid',listButton:'secondary',gridButton:'primary'}
        this.searchInputRef = React.createRef();
        this.imageListRef = React.createRef();
    }
    onGridClick = ()=>{
        this.setState({view:'grid',gridButton:'primary',listButton:'secondary'})
        this.imageListRef.current.setState({view:'grid'})
    }
    onListClick = ()=>{
        this.setState({view:'list',gridButton:'secondary',listButton:'primary'})
        this.imageListRef.current.setState({view:'list'})
    }
    onSearchSubmit= async (entry)=>{
        console.log(entry)
        //this.setState({inputValue:entry})
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${entry.replace(" ","+")}&image_type=photo`)
        console.log(response.data.hits)
        this.imageListRef.current.setState({images:response.data.hits,view:'grid',inputValue:entry})
        this.setState({images:response.data.hits})
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'30px'}}>
            
            <div dataContent="it works" className="ui huge header" style={{marginLeft:'auto',marginRight:'auto'}}>Image Search</div>
            <SearchInput ref={this.searchInputRef}  onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='category'/>
            <div style={{marginBottom:'13px',zIndex:1}} className="ui fluid icon buttons">
                <button dataContent="grid" onClick={this.onGridClick} className={`ui ${this.state.gridButton} basic button`}><i className="grid layout icon"></i></button>
                <button onClick={this.onListClick} className={`ui ${this.state.listButton} basic button`}><i className="list layout icon"></i></button>
            </div>
            <ImageList ref={this.imageListRef} searchInputRef={this.searchInputRef}   images={this.state.images} inputValue={this.state.inputValue} view = {this.state.view}/>
        </div>
    )
    }
}

export default App;