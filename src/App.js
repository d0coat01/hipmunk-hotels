import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Hotels from './Hotels/Hotels';

function App() {
  return (
    <div>
      <Router>
      <div className="app">
        <Route exact path="/" component={Hotels} />
      </div>
    </Router>
    </div>
  );
}

export default App;
