import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import BIRDS from '/home/nikhils1/React-Apps/image-search/node_modules/vanta/dist/vanta.birds.min.js'

class MainApp extends React.Component{
    render(){
        return(
                    <App/>
        )
    }
}
ReactDOM.render(
    <MainApp/>,
    document.querySelector('#root')
)
