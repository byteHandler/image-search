import React from 'react';
class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.defaultButton === "grid" ? {gridButton:'blue',listButton:'secondary basic'} : {gridButton:'secondary basic',listButton:'blue'}
    }
    render(){
        return (
            <div style={{marginBottom:'13px',zIndex:1}} className="ui fluid icon buttons"> 
                <button onClick={this.props.onGridClick} className={`ui ${this.state.gridButton} button`}><i className="grid layout icon"></i></button>
                <button onClick={this.props.onListClick} className={`ui ${this.state.listButton} button`}><i className="list layout icon"></i></button>
            </div>
        )
    }
}

export default ButtonComponent;