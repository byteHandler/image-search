import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import BIRDS from '/home/nikhils1/React-Apps/image-search/node_modules/vanta/dist/vanta.birds.min.js'

class MainApp extends React.Component{
    constructor(props){
        super(props)
        this.vantaRef = React.createRef()
    }
    componentDidMount(){
        this.vantaEffect = BIRDS({
            el:this.vantaRef.current
        })
    }
    componentWillUnmount(){
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render(){
        return(
            <div style={{height:"100vh",width:"100%"}}>
                <div  className=  "ui container" ref={this.vantaRef}>
                    <App/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <MainApp/>,
    document.querySelector('#root')
)
