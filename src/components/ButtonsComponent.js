import React from 'react';
class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.defaultButton === "grid" ? {gridButton:'inverted '+this.props.color,listButton:'inverted',inView:false} : {gridButton:'inverted',listButton:'inverted '+this.props.color,inView:false}
    }
    render(){
        return (
            <div style={this.state.inView ? {paddingLeft:"5px",paddingRight:"5px",msTransform:"translate(-50%,-50%)",transform:"translate(-50%,-50%)",margin:'0',left:"80%",top:"90%",position:"absolute"}:{display:'none'}} 
                className="ui icon buttons"> 
                <button onClick={this.props.onGridClick} className={`ui ${this.state.gridButton} button`}><i className="grid layout icon"></i></button>
                <button onClick={this.props.onListClick} className={`ui ${this.state.listButton} button`}><i className="list layout icon"></i></button>
            </div>
        )
    }
}

export default ButtonComponent;