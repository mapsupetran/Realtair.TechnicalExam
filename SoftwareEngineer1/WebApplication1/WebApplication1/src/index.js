import React from 'react'
import ReactDOM from 'react-dom';
import Home from './components/Home';

const renderHome = () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );  
}

module.exports = {
  renderHome
}