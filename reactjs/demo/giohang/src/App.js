import React, { Component } from 'react';
import './App.css';

// import component
import DanhSachSanPham from './components/danhsachsanpham';
import GioHang from './components/giohang';


class App extends Component {  
  // state = {
  //   item: null
  // }
  // ThemVaoGioHang(item) {       
  //   this.setState({
  //     item:item
  //   })    
  // }

  render() {      
    return (
      <div className="container">
        <h1 className="text-center">Mua hàng online</h1>
        <DanhSachSanPham/>
        <span className="wellcome">Chào mừng tới shoping online</span>
        <h1>Giỏ hàng</h1>
        <GioHang />
      </div>
    );
  }
}

export default App;
