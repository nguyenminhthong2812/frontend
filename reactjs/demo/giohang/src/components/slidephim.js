import React,{Component} from 'react';

export default class SliderPhim extends Component{
    render(){
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.phim.HinhAnh} alt="Card" />
                    <div className="card-body text-center">
                        <h4 className="card-title">{this.props.phim.TenPhim}</h4>
                        <p className="card-text">{this.props.phim.MoTa}</p>
                        <a className="btn btn-success">Xem trailer</a>
                    </div>
                </div>
            </div>
        );
    }
}