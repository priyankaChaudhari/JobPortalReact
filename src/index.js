import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container.js'
import * as serviceWorker from './serviceWorker';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
//import { resolveObject } from 'url';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class App extends React.Component {
    render() {
        return (
        <div>
            <Container></Container>
        </div>
        )
    }
}
ReactDOM.render( <App />, document.querySelector('#root'));


serviceWorker.unregister();
