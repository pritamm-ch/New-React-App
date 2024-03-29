import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import './App.css';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </div>
    </Router>
  );
}

export default App;
