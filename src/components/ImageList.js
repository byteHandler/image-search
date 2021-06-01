import React from 'react';
import ImageComponent from './ImageComponent';
class ImageList extends React.Component{
    constructor(props){
        super(props)
        this.loadCount = 0;
        this.state = {images : [],view:props.view,inputValue:""}
        this.sIR = props.searchInputRef;
    }
    addLoadCount=()=>{
        this.loadCount += 1;
        if(this.loadCount === this.state.images.length){
            this.props.searchInputRef.current.setState({loading:'category'})
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.images.length===0){
            nextProps.searchInputRef.current.setState({loading:'category'});
        }
        return true;
    }
    downloadFile = (link) => {
        window.location.href = link;
      }
    render(){
        //console.log(this.props)
        this.loadCount=0; // update load count once it is rendered (rendered only once on each submit)
        const img = this.state.images.map((image)=>{   
            if (this.state.view ==='grid'){
            return (
                <div className="eight wide column" key = {image.id}>
                <div className = "ui fluid card" >
                <ImageComponent addLoadCount= {this.addLoadCount} source={image.largeImageURL} width={image.previewWidth} height={image.previewHeight}/>
                </div>
                </div>
            )}
            else{
                return (
                    <div className="item" key={image.id}>
                        <div className="ui fluid card">
                            <ImageComponent addLoadCount={this.addLoadCount} source={image.largeImageURL} width={image.previewWidth} height={image.previewHeight}/>
                            <div className="content">
                                <div className="header">{image.user}</div>
                                <div className="meta">
                                    <i className="thumbs up outline icon"/> {image.likes} <br></br>
                                    <i className="arrow alternate circle down outline icon"></i> {image.downloads} <br></br>
                                    <i className="expand icon"/> {image.imageWidth}x{image.imageHeight}<br></br>
                                    <button onClick={()=>window.location.href=image.imageURL} style={{marginTop:'3px'}} className="ui primary basic button">
                                        Download
                                    </button>
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
                    <div className="ui divided items">
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