import React, {Component} from 'react';
// import component
import SanPham from './sanpham';

// import data
import dssp from '../data/dssanpham'

export default class DanhSachSanPham extends Component{
    state = {
        dssp:dssp
    }
    render(){   
        let eleSanPham = this.state.dssp.map((sp,index)=>{
            return <SanPham key={index} sp={sp}/>
        });     
        return (
            <div className="row my-5">
                {eleSanPham}
            </div>
        );
    }
}