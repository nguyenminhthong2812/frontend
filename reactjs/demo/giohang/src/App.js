import React, { Component } from 'react';
import './App.css';

// import component
import DanhSachSanPham from './components/danhsachsanpham';
import GioHang from './components/giohang';
import DanhSachPhim from './components/danhsachphim';


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
        {/* <h1 className="text-center">Mua hàng online</h1>
        <DanhSachSanPham/>
        <span className="wellcome">Chào mừng tới shoping online</span>
        <h1>Giỏ hàng</h1>
        <GioHang /> */}
        <h1 className="text-center">Danh sách phim</h1>
        <DanhSachPhim/>
      </div>
    );
  }
}

export default App;
