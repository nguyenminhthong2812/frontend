import React, { Component } from 'react';
import './App.css';

// import component
import Header from './components/header';
import Slider from './components/slider';
import Smartphone from './components/smartphone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header> 
        <Slider></Slider> 
        <div className="container mt-5">
          <h1 className="text-center">BEST SALE</h1>
          <div className="row mt-3">
            <Smartphone></Smartphone>
            <Smartphone></Smartphone>
            <Smartphone></Smartphone>
            <Smartphone></Smartphone>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
