import React from 'react';
class SearchInput extends React.Component{
    state = {inputValue: this.props.inputValue,loading:'category'}
    onFormSubmit =(event)=>{
        event.preventDefault()
        this.setState({loading:'loading'})
        this.props.onSearchSubmit(this.state.inputValue)
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <div className={`ui fluid ${this.state.loading} search`}>
                            <div className = "ui massive icon input">
                                <input className="prompt" type="text" placeholder={this.state.inputValue} value={this.state.inputValue} onChange={(event)=>this.setState({inputValue:event.target.value})}/>
                                <i className="search icon" ></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )        
    }
}

export default SearchInput; 