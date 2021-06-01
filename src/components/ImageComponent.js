import React from 'react';
class ImageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {loaded : false}
    }
    render(){
        //console.log(this.props)
        return(
            <div>
                <div className="ui placeholder" style={this.state.loaded ? {display:'none'}: {}}>
                    <div className="ui image" style={{width:this.props.width, height:this.props.height}}></div>
                </div>
                <img 
                    src={this.props.source}
                    style = {this.state.loaded ? {} : {display:'none'}}
                    onLoad = {()=>{
                        this.setState({loaded:true});
                        this.props.addLoadCount();
                }}
                    className="ui fluid image"
                    alt ="profile-pic"
                />
            </div>
        )
    }
}

export default ImageComponent;