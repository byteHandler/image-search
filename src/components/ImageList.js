import React from 'react';
import ImageComponent from './ImageComponent';
class ImageList extends React.Component{
    constructor(props){
        super(props)
        this.loadCount = 0;
        this.state = {images : [],view:'grid',inputValue:""}
    }
    addLoadCount(){
        this.loadCount += 1;
        if(this.loadCount === this.props.images.length){
            // change the state of the search input component
            this.props.searchInputRef.current.setState({loading:'category'})
        }
    }
    updateProps(){
        if(this.state.images.length===0){
            this.props.searchInputRef.current.setState({loading:'category'})
        }
    }
    render(){
        //this.updateProps();
        this.loadCount=0; // update load count once it is rendered (rendered only once on each submit)
        const img = this.state.images.map((image)=>{
            if (this.state.view ==='grid'){
            return (
                <div className="eight wide column" key = {image.id}>
                <div className = "ui fluid card" >
                <ImageComponent imageListRef= {this} source={image.largeImageURL} width={image.previewWidth} height={image.previewHeight}/>
                </div>
                </div>
            )}
            else{
                return (
                    <div className="item" key={image.id}>
                        <div className="ui fluid card">
                            <ImageComponent source={image.largeImageURL} width={image.previewWidth} height={image.previewHeight}/>
                            <div className="content">
                                <div className="header">{image.user}</div>
                            <div className="meta">
                                <i className="thumbs up outline icon"/> {image.likes} <br></br>
                                <i className="arrow alternate circle down outline icon"></i> {image.downloads} <br></br>
                            </div>
                            <div className="description">
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        if(this.state.images.length > 0){
            if(this.state.view === 'grid'){
            return (
                <div className="ui grid">
                   {img}
                </div>
            )}
            else{
                return(
                    <div class="ui divided items">
                        {img}
                    </div>
                )
            }
        }
        else{
            if(this.state.inputValue === ""){
                return(
                    <div className="ui placeholder segment">
                        <div className="ui icon header">
                            <i className="image outline icon"></i>
                            Start by typing in the search bar,<br></br>
                            then press <em>ENTER</em>.
                        </div>
                    </div>
                )
            }
            return(
                <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i className="frown outline icon"></i>
                    No image named<br></br>
                    "<em>{this.state.inputValue}</em>"<br></br>
                    was found.
                </div>
            </div>
            )
        }
    }
}




export default ImageList;