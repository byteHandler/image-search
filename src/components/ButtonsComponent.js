import React from 'react';
class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.defaultButton === "grid" ? {gridButton:'orange',listButton:'secondary basic',inView:false} : {gridButton:'secondary basic',listButton:'orange',inView:false}
    }
    render(){
        return (
            <div style={this.state.inView ? {paddingLeft:"5px",paddingRight:"5px",msTransform:"translate(-50%,-50%)",transform:"translate(-50%,-50%)",margin:'0',left:"50%",top:"90%",position:"absolute"}:{display:'none'}} className="ui fluid icon buttons"> 
                <button onClick={this.props.onGridClick} className={`ui inverted ${this.state.gridButton} button`}><i className="grid layout icon"></i></button>
                <button onClick={this.props.onListClick} className={`ui inverted ${this.state.listButton} button`}><i className="list layout icon"></i></button>
            </div>
        )
    }
}

export default ButtonComponent;