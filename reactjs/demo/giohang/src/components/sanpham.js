import React, { Component } from 'react';
import {connect} from 'react-redux';


class SanPham extends Component {      
    


    ThemVaoGioHang = () =>{
        let item = {
            id: this.props.sp.id,
            img: this.props.sp.img,
            name: this.props.sp.name,
            price: this.props.sp.price,
            priceFloat:this.props.sp.priceFloat,
            soluong: 1,
            tongtien: this.props.sp.priceFloat
        }
        this.props.onAddItem(item);
    }

    render() {   
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.sp.img} alt="Card" />
                    <div className="card-body text-center">
                        <h4 className="card-title">{this.props.sp.name}</h4>
                        <p className="card-text">{this.props.sp.price}</p>
                        <a className="btn btn-success" onClick={this.ThemVaoGioHang}>Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddItem: (item)=>{
            dispatch(
                {
                    type:'ADD_ITEM',
                    item
                }
            )
        }
    }    
}

export default connect(null,mapDispatchToProps)(SanPham);