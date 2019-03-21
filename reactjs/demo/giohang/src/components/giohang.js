import React, { Component } from 'react';
import { connect } from 'react-redux';
// import component
import Item from './item';

const mapStateToProps = (state) => {
    return {
        DSGH: state.DSGH
    }
}

class GioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tongtien: 0
        };

    }
   

    renderItem = () => {
        console.log(this.props.DSGH);
        return this.props.DSGH.map((item, i) => {
            return <Item key={i} item={item} TinhTien={this.TinhTien} />
        })
    }

    

    componentWillReceiveProps(nextProps) {
        // Any time props.email changes, update state.
        let tien = 0;
        for (let item of nextProps.DSGH) {
            tien += item.tongtien;
        }

        this.setState({
            tongtien: tien
        });

    }

    TinhTien = (priceFloat) => {
        console.log(priceFloat);
        this.setState({
            tongtien: this.state.tongtien + priceFloat
        })        
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItem()}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <span>Tổng tiên:</span>
                    <span className="ml-3">{this.state.tongtien} $</span>
                    <button className="btn btn-info ml-3">Thanh toán</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(GioHang);