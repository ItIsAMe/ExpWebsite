import React, {Component} from 'react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import {Nav} from './Nav';
class App extends Component {

    render() {
        return (
        <div>
            <div className = "App-header">
                <Nav />
            </div>
        </div>
    );
    }
}

export default App;