import React from 'react';
import './App.css';
import {Header} from './b1-header/Header';
import {Navigation} from './b2-navigation/Navigation';
import {Footer} from './b3-footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    );
}

export default App;
