import React, { Component } from 'react';

export default class Modal extends Component {
    
    render() {    
     let {id,name,price,screen,backCamera,frontCamera,img,desc} = this.props.dienthoai;  
      return (

          <div className="modal" id={id}>
              <div className="modal-dialog">
                  <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                          <h4 className="modal-title">{name}</h4>
                          <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th>Thuộc tính</th>
                                      <th>Thông số</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>price</td>
                                      <td>{price}</td>
                                  </tr>
                                  <tr>
                                      <td>screen</td>
                                      <td>{screen}</td>
                                  </tr>
                                  <tr>
                                      <td>backCamera</td>
                                      <td>{backCamera}</td>
                                  </tr>
                                  <tr>
                                      <td>frontCamera</td>
                                      <td>{frontCamera}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>               
        
      );
    }
  }
  