import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default App;
