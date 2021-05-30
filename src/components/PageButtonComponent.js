import React from 'react';
class PageButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {buttonTexts : props.buttonTexts,clickedButtonIndex:props.clickedButtonIndex}
    }
    render(){
        const buttons = this.state.buttonTexts.map((text,i)=>{
            if(this.state.clickedButtonIndex ===i){
                return (
                    <button key = {i} style={{marginLeft:'2px',marginRight:'2px'}} className="ui black button">{text}</button>
                    )
            }
            return (
            <button key = {i} style={{marginLeft:'2px',marginRight:'2px'}} onClick = {()=>{
                this.setState({clickedButtonIndex:i})
                this.props.changeListSize(i+1)
        }}className="ui blue basic button">{text}</button>
            )
        })
        return(
            <div className="ui icon buttons"style={{marginBottom:"5px"}}>
                {buttons}
            </div>
        )
    }
}

export default PageButtonComponent;