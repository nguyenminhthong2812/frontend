import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // gia:{
            //     soluong:this.props.item.soluong,
            //     tongtien:this.props.item.tongtien
            // }
            status: true
        }
    }


    Tang = (price, id) => {
        let tangitem = {
            id: id,
            soluong: this.props.item.soluong + 1,
            tongtien: this.props.item.tongtien + price
        }
        this.props.onTangItem(tangitem);
        this.setState({
            status: !this.state.status
        })
    }

    Giam = (price, id) => {
        let giamitem = {
            id: id,
            soluong: this.props.item.soluong - 1,
            tongtien: this.props.item.tongtien - price
        }
        //console.log(giamitem);
        if (giamitem.soluong > 0) {
            this.props.onGiamItem(giamitem);
            this.setState({
                status: !this.state.status
            })
        }

    }

    XoaItem = (id) => {
        this.props.onDeleteItem(id);
    }

    render() {
        const img = {
            width: '70px',
            height: '50px'
        }

        return (
            <tr>
                <td>
                    <img src={this.props.item.img} style={img}></img>
                </td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
                <td>
                    {this.props.item.soluong}
                    <button className="btn btn-success ml-2" onClick={this.Giam.bind(this, this.props.item.priceFloat, this.props.item.id)}>-</button>
                    <button className="btn btn-success ml-1" onClick={this.Tang.bind(this, this.props.item.priceFloat, this.props.item.id)}>+</button>
                </td>
                <td>{this.props.item.tongtien}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.XoaItem(this.props.item.id)}>X</button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem: (id) => {
            dispatch({
                type: 'DELETE_ITEM',
                id
            })
        },
        onTangItem: (tangitem) => {
            dispatch({
                type: 'TANG_ITEM',
                tangitem
            })
        },
        onGiamItem: (giamitem) => {
            dispatch({
                type: 'GIAM_ITEM',
                giamitem
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);