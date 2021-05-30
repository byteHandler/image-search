import React from 'react';
import ImageComponent from './ImageComponent';
const ImageList = (props)=>{
    const img = props.images.map((image)=>{
        if (props.view ==='grid'){
        return (
            <div className="eight wide column" key = {image.id}>
            <div className = "ui fluid card" >
            <ImageComponent source={image.largeImageURL} width={image.previewWidth} height={image.previewHeight}/>
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
    if(props.images.length > 0){
        if(props.view === 'grid'){
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
        if(props.inputValue === ""){
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
                "<em>{props.inputValue}</em>"<br></br>
                was found.
            </div>
        </div>
        )
    }
}




export default ImageList;