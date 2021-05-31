import React from 'react';
class PageButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {buttonTexts : props.buttonTexts,clickedButtonIndex:props.clickedButtonIndex,maxButtons:this.props.maxButtons,inView:false}
    }
    onClickPrev=()=>{
        this.props.changeImageList(this.state.clickedButtonIndex)
        this.setState({clickedButtonIndex: this.state.clickedButtonIndex-1})
    }
    onClickNext=()=>{
        this.props.changeImageList(this.state.clickedButtonIndex+2)
        this.setState({clickedButtonIndex:this.state.clickedButtonIndex+1})
    }
    render(){
        console.log("clickedButtonIndex :"+this.state.clickedButtonIndex)
        const startIndex = Math.max((this.state.clickedButtonIndex-(Math.floor(this.state.maxButtons/2))),0)
        console.log("start index : "+startIndex)
        let endIndex = Math.min(startIndex+this.state.maxButtons,(this.state.buttonTexts.length)) 
        console.log("end index :"+endIndex)
        if(startIndex===0){
            endIndex =  Math.min((this.state.maxButtons),(this.state.buttonTexts.length)) 
        }
        /*if(endIndex- startIndex < this.state.maxButtons)  {
            const temp = this.state.maxButtons - (endIndex-startIndex)
            endIndex = Math.min(temp,this.state.buttonTexts.length)

        }*/
        const buttons = this.state.buttonTexts.slice(startIndex,endIndex).map((text,i)=>{
            if(this.state.clickedButtonIndex ===(Number(text)-1)){
                return (
                    <button key = {i} style={{marginLeft:'2px',marginRight:'2px',width:"2px"}} className="ui blue button">{text}</button>
                    )
            }
            return (
            <button key = {i} style={{marginLeft:'2px',marginRight:'2px',width:"2px"}} onClick = {()=>{
                this.setState({clickedButtonIndex:Number(text)-1})
                this.props.changeImageList(Number(text))
        }}className="ui secondary basic button">{text}</button>
            )
        })
        return(
            <div style={this.state.inView ? {marginTop:'5px'}:{display:'none'}}>
                <div className="fluid ui icon buttons"style={{marginBottom:"5px"}}>
                    {buttons}
                </div> 
                <div className="fluid ui icon buttons"style={{marginBottom:"5px"}}>
                    <button onClick={this.onClickPrev} style={this.state.clickedButtonIndex+1 > 1 ? {} : {display:'none'}} className="ui black basic button"><i className="left chevron icon"></i></button>
                    <button onClick={this.onClickNext} style={this.state.clickedButtonIndex+1 !== this.state.buttonTexts.length ? {} : {display:'none'}} className="ui black basic button"><i className="right chevron icon"></i></button>
                </div>
            </div>
        )
    }
}

export default PageButtonComponent;