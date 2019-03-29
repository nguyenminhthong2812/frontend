import React, { Component } from 'react';
import { connect } from 'react-redux';
// IMPORT COMPONENT
import SliderPhim from './slidephim';
// IMPORT THƯ VIỆN AXIOS
import Axios from 'axios';

// IMPORT ACTION CREATER
import {actAddPhim} from '../redux/action/phim';


class DanhSachPhim extends Component {

    componentDidMount() {
        // Axios({
        //     method: 'GET',
        //     url: 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03'
        // }).then(res => {
        //     this.props.onAddDSP(res.data);            
        // }).catch(err => {
        //     console.log(err);
        // })
        this.props.fetchData();
    }

    render() {
        console.log(this.props.DSP);
        let elePhim = this.props.DSP.map((phim, index) => {
            return <SliderPhim key={index} phim={phim} />
        });
        return (
            <div className="row my-5">
                {elePhim}
            </div>
        );
    }

}

function fetchData() {    
    return (dispatch) => {      
        Axios({
            method: 'GET',
            url: 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03'
        }).then(res => {            
            let dsp = res.data;
            dispatch(actAddPhim(dsp));            
        }).catch(err => {
            console.log(err);
        })
    }
  }

const mapStateToProps = (state) => {
    return {
        DSP: state.DSP
    }
};
const mapDispatchToProps = (dispatch) => {    
    return {            
        fetchData: () => dispatch(fetchData())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(DanhSachPhim);