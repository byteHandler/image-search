import React from 'react';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import ImageList from './ImageList.js';
import ButtonComponent from './ButtonsComponent.js';
import PageButtonComponent from './PageButtonComponent.js'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images :[],inputValue:"",view:'grid',listButton:'secondary',gridButton:'primary'}
        this.searchInputRef = React.createRef();
        this.imageListRef = React.createRef();
        this.buttonComponentRef = React.createRef();
        this.pageButtonComponentRef = React.createRef();
    }
    onGridClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:'blue',listButton:'secondary basic'})
        this.imageListRef.current.setState({view:'grid'})
    }
    onListClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:'secondary basic',listButton:'blue'})
        this.imageListRef.current.setState({view:'list'})
    }
    onSearchSubmit= async (entry)=>{
        //console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${entry.replace(" ","+")}&image_type=photo`)
        console.log(response)
        this.imageListRef.current.setState({images:response.data.hits,inputValue:entry})
        //response.data.total is our variable to decide the number
        const pageSize = 20; // Update whenever needed
        const nPages = Math.floor(response.data.total/pageSize) + 1
        const buttonTextArray = Array.from(Array(nPages), (_, index) => index + 1)
        this.pageButtonComponentRef.current.setState({buttonTexts:buttonTextArray,clickedButtonIndex:0})
    }
    changeImageList= async (pageNo)=>{
        this.searchInputRef.current.setState({loading:'loading'})
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${this.searchInputRef.current.state.inputValue.replace(" ","+")}&image_type=photo&page=${pageNo}`)
        this.imageListRef.current.setState({images:response.data.hits})
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'30px'}}>
            
            <div  className="ui huge header" style={{marginLeft:'auto',marginRight:'auto'}}>Image Search</div>
            <SearchInput ref={this.searchInputRef}  onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='category'/>
            <ButtonComponent onGridClick={this.onGridClick} onListClick={this.onListClick} ref={this.buttonComponentRef} defaultButton='grid'/>
            <ImageList ref={this.imageListRef} searchInputRef={this.searchInputRef}   images={this.state.images} inputValue={this.state.inputValue} view = {this.state.view}/>
            <PageButtonComponent maxButtons= {7} ref={this.pageButtonComponentRef} changeImageList={this.changeImageList} buttonTexts={[1,2,3]} clickedButtonIndex={0} />
        </div>
    )
    }
}

export default App;