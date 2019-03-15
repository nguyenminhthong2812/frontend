import React, { Component } from 'react';
import './App.css';

// import component
import Header from './components/header';
import Slider from './components/slider';
import Smartphone from './components/smartphone';

class App extends Component {
  DSDienThoai = [
    { id: 'sp_1', name: 'iphoneX', price: '30.000.000 VNÄ•', screen: 'screen_1', backCamera:
    'backCamera_1', frontCamera: 'frontCamera_1', img: '../imgs/oppo-a7-32gb-gold-400x400.jpg', 
    desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    { id: 'sp_2', name: 'Note 7', price: '20.000.000 VNÄ•', screen: 'screen_2', backCamera: 'backCamera_2',
    frontCamera: 'frontCamera_2', img: '/static/media/oppo-a7-32gb-gold-400x400.jpg', 
    desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
    { id: 'sp_3', name: 'Vivo', price: '10.000.000 VNÄ•', screen: 'screen_3', backCamera: 'backCamera_3',
    frontCamera: 'frontCamera_3', img: '/static/media/samsung-galaxy-a9-2018-blue-400x400.jpg', 
    desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    { id: 'sp_4', name: 'Blacberry', price: '15.000.000 VNÄ•', screen: 'screen_4', backCamera:
    'backCamera_4', frontCamera: 'frontCamera_4', img: '/static/media/samsung-galaxy-a50-white-400x400.jpg', 
    desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' } 
  ]

  constructor(props){
    super(props);
    this.state = {
      dsdt:this.DSDienThoai
    };
  }

  renderDienThoai = () =>{
    return this.state.dsdt.map(
      (dt,index) =>{
        return <Smartphone key={index} dienthoai={dt}></Smartphone>
      }
    );
  }

  

  render() {
    return (
      <div className="App">
        <Header></Header> 
        <Slider></Slider> 
        <div className="container mt-5">
          <h1 className="text-center">BEST SALE</h1>
          <div className="row mt-3">
            {this.renderDienThoai()}
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
