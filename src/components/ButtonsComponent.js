import React from 'react';
class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.defaultButton === "grid" ? {gridButton:'primary',listButton:'secondary'} : {gridButton:'secondary',listButton:'primary'}
    }
    render(){
        return (
            <div style={{marginBottom:'13px',zIndex:1}} className="ui fluid icon buttons">
                <button onClick={this.props.onGridClick} className={`ui ${this.state.gridButton} basic button`}><i className="grid layout icon"></i></button>
                <button onClick={this.props.onListClick} className={`ui ${this.state.listButton} basic button`}><i className="list layout icon"></i></button>
            </div>
        )
    }
}

export default ButtonComponent;