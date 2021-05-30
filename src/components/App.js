import { render } from '@testing-library/react';
import React from 'react';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import ImageList from './ImageList.js'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images :[], loading:0, inputValue:"",view:'grid',listButton:'secondary',gridButton:'primary'}
    }
    onGridClick = ()=>{
        this.setState({view:'grid',gridButton:'primary',listButton:'secondary'})
    }
    onListClick = ()=>{
        this.setState({view:'list',gridButton:'secondary',listButton:'primary'})
    }
    onSearchSubmit= async (entry)=>{
        console.log(entry)
        this.setState({loading:1,inputValue:entry})
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${entry.replace(" ","+")}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({images:response.data.hits, loading:0})
    }
    render(){
    if(this.state.loading === 0){
    return (
        <div className="ui container" style={{marginTop:'30px'}}>
            
            <div dataContent="it works" className="ui huge header" style={{marginLeft:'auto',marginRight:'auto'}}>Image Search</div>
            <SearchInput  onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='category'/>
            <div style={{marginBottom:'13px',zIndex:1}} className="ui fluid icon buttons">
                <button dataContent="grid" onClick={this.onGridClick} className={`ui ${this.state.gridButton} basic button`}><i className="grid layout icon"></i></button>
                <button onClick={this.onListClick} className={`ui ${this.state.listButton} basic button`}><i className="list layout icon"></i></button>
            </div>
            <ImageList   images={this.state.images} inputValue={this.state.inputValue} view = {this.state.view}/>
        </div>
    )
    }
    else{
    const t = Array.from(Array(20).keys()).map((k)=>{
        if(this.view ==='grid'){
            return(
                <div className="eight wide column" key = {k}>
                <div className = "ui fluid card" >
                <div className="ui placeholder">
                <div className="image"></div>
                </div>
                </div>
                </div>
            )
        }
        else{
            return(
                <div className = "ui fluid card" key = {k} >
                    <div className = "ui placeholder">
                <div className="image"></div>
                </div>
                </div>
            )
        }
    })
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
            <div className="ui huge header" style={{marginLeft:'auto',marginRight:'auto'}}>Image Search</div>
            <SearchInput onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='loading'/>
            {t}
        </div>
        )
    }
    }
}

export default App;