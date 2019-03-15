import React, { Component } from 'react';
import swal from 'sweetalert';

import Modal from './modal';

class Smartphone extends Component {

    HanderCard = () =>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }


    render() {
      let {id,name,price,screen,backCamera,frontCamera,img,desc} = this.props.dienthoai;
      return (
        <div className="card" style={{ width: '25%' }}>
          <img className="card-img-top" src={require('../imgs/oppo-a7-32gb-gold-400x400.jpg')} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{desc}</p>
            <a className="btn btn-primary mr-2" data-toggle="modal" data-target={`#${id}`}>Detail</a>
            <a className="btn btn-danger" onClick={this.HanderCard}>Cart</a>
          </div>


          <Modal dienthoai={this.props.dienthoai}></Modal>  
        </div>
      );
    }
  }
  
  export default Smartphone;