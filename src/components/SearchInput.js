import React from 'react';
class SearchInput extends React.Component{
    state = {inputValue: this.props.inputValue,loading:'category'}
    onFormSubmit =(event)=>{
        if (event.keyCode === 13){
            this.setState({loading:'loading'})
            this.props.onSearchSubmit(this.state.inputValue)
        }
    }
    onChange= (event)=>{
        this.setState({inputValue:event.target.value})
    }
    render(){
        return (
            <div className={`ui ${this.state.loading} search`} style={{left:"50%",margin:"0",top:"60%",position:"absolute",transform:"translate(-50%,-50%)"}}>
            <div className="ui icon input">
                <input onChange={this.onChange} onKeyDown={this.onFormSubmit} style={{
                    borderRightWidth:"3px",
                    borderLeftWidth:"3px",
                    borderLeftColor:"white",
                    borderRightColor:"white",
                    borderLeftStyle:"solid",
                    borderRightStyle:"solid",
                    fontSize:"30px",
                    marginRight:"2px",
                    height:'10px',
                    width:"300px",
                    borderBlockWidth:"3px",
                    textDecorationThickness:"3px",
                    borderBlockColor:"white",
                    color:"white",
                    backgroundColor:"transparent"}} 

                    className="prompt" type="text" placeholder=""/>
                <i className="inverted search icon"></i>
            </div>
            </div>
            
        )        
    }
}

export default SearchInput; 