import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
// import scrollControl from './scrollControl'

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
    {/* <ScrollControl/> */}
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
