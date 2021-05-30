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
                    <button style={{marginLeft:'2px',marginRight:'2px'}} onClick = {()=>{alert("LoL , this doesn't do anything for now. \n Have a nice day!")}}className="ui black basic button">{text}</button>
                    ) 
            }
            return (
            <button style={{marginLeft:'2px',marginRight:'2px'}} onClick = {()=>{alert("LoL , this doesn't do anything for now. \n Have a nice day!")}}className="ui blue basic button">{text}</button>
            )
        })
        return(
            <div class="ui icon buttons">
                {buttons}
            </div>
        )
    }
}

export default PageButtonComponent;