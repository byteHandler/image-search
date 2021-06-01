import React from 'react';
class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.defaultButton === "grid" ? {gridButton:'blue',listButton:'secondary basic',inView:false} : {gridButton:'secondary basic',listButton:'blue',inView:false}
    }
    render(){
        return (
            <div style={this.state.inView ? {marginBottom:'13px',zIndex:1}:{display:'none'}} className="ui fluid icon buttons"> 
                <button onClick={this.props.onGridClick} className={`ui inverted ${this.state.gridButton} button`}><i className="grid layout icon"></i></button>
                <button onClick={this.props.onListClick} className={`ui inverted ${this.state.listButton} button`}><i className="list layout icon"></i></button>
            </div>
        )
    }
}

export default ButtonComponent;