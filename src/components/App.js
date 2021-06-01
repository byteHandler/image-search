import React from 'react';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import ImageList from './ImageList.js';
import ButtonComponent from './ButtonsComponent.js';
import PageButtonComponent from './PageButtonComponent.js'
import BIRDS from '/home/nikhils1/React-Apps/image-search/node_modules/vanta/dist/vanta.birds.min.js'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images :[],inputValue:"",view:'grid',listButton:'secondary',gridButton:'primary'}
        this.searchInputRef = React.createRef();
        this.imageListRef = React.createRef();
        this.buttonComponentRef = React.createRef();
        this.pageButtonComponentRef = React.createRef();
        this.vantaRef = React.createRef();
        this.color = "orange";
    }
    componentWillUnmount(){
        if (this.vantaEffect) this.vantaEffect.destroy();
    }
    componentDidMount(){
        this.vantaEffect = BIRDS({
            el:this.vantaRef.current,
            birdSize : "1.5"
        })
    }
    getnoResults(){
        return this.noResults;
    }

    onGridClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:`inverted ${this.color} basic`,listButton:`inverted basic`})
        this.imageListRef.current.setState({view:'grid'})
    }
    onListClick = ()=>{
        this.buttonComponentRef.current.setState({gridButton:`inverted basic`,listButton:`inverted ${this.color} basic`})
        this.imageListRef.current.setState({view:'list'})
    }
    onSearchSubmit= async (entry)=>{
        //console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${entry.replace(" ","+")}&image_type=photo`)
        console.log(response)
        this.imageListRef.current.setState({images:response.data.hits,inputValue:entry})

        if(response.data.hits.length>0){
            const pageSize = 20; // Update whenever needed
            const nPages = Math.floor(response.data.total/pageSize) + 1
            const buttonTextArray = Array.from(Array(nPages), (_, index) => index + 1)
            this.pageButtonComponentRef.current.setState({buttonTexts:buttonTextArray,clickedButtonIndex:0,inView:true})
            this.buttonComponentRef.current.setState({inView:true})
        }
        else{
            this.pageButtonComponentRef.current.setState({inView:false})
            this.buttonComponentRef.current.setState({inView:false})
        }
        //response.data.total is our variable to decide the number

    }
    changeImageList= async (pageNo)=>{
        this.searchInputRef.current.setState({loading:'loading'})
        const response = await axios.get(`https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=${this.searchInputRef.current.state.inputValue.replace(" ","+")}&image_type=photo&page=${pageNo}`)
        this.imageListRef.current.setState({images:response.data.hits})
    }
    render(){
    return (
        <div style={{position:"relative"}}>
        
            <div style={{height:"40vh",position:"relative"}} ref={this.vantaRef}>
            <div  className="ui huge header" style={{textAlign:"center",paddingLeft:'auto',paddingRight:'auto',paddingTop:'40px',fontSize:'40px',color:"white"}}>Image Search</div>
            <SearchInput ref={this.searchInputRef}  onSearchSubmit={this.onSearchSubmit} inputValue = {this.state.inputValue} loading='category'/>
            <ButtonComponent color={this.color} getnoResults={this.noResults} onGridClick={this.onGridClick} onListClick={this.onListClick} ref={this.buttonComponentRef} defaultButton='grid'/>
            </div>
            <div className="ui container" style={{marginTop:"30px"}}>
            <ImageList ref={this.imageListRef} searchInputRef={this.searchInputRef}   images={this.state.images} inputValue={this.state.inputValue} view = {this.state.view}/>
            <PageButtonComponent color={this.color} getnoResults={this.noResults} maxButtons= {10} ref={this.pageButtonComponentRef} changeImageList={this.changeImageList} buttonTexts={[1,2,3]} clickedButtonIndex={0} />
            <h6 className="ui bottom attached header">
                <a href="https://pixabay.com/" style={{
                    margin:'0px 15px 5px 0px',
                    fontSize:'12px',
                    lineHeight:0.0001,
                    color:'#555',
                    display:'block',
                    float:'left',
                }}>
                    <i style={{
                        display:'block',
                        width:'68px',
                        overflow:'hidden'
                    }}>
                        <img src="https://pixabay.com/static/img/logo.svg" 
                        style={{
                            width:'60px',
                            marginBottom:'10px'
                        }}
                        alt="profile-pic"
                        />
                    </i>
                </a>
                Images fetched from Pixabay API
            </h6>
        </div>
        </div>
    )
    }
}

export default App;