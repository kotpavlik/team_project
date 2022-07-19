import React from 'react';
import './App.css';
import {Header} from './b1-header/Header';
import {BodyWithRoutes} from './b2-body-with-routes/BodyWithRoutes';
import {Footer} from './b3-footer/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <BodyWithRoutes/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
