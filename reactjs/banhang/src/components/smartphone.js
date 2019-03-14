import React, { Component } from 'react';
import Card from '../../node_modules/react-bootstrap/Card';
import Button from '../../node_modules/react-bootstrap/Button';

class Smartphone extends Component {
    render() {
      return (
        <div className="Smartphone col-xs-12 col-sm-6 col-md-6 col-lg-3">            
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={require('../imgs/iphone-xs-max-gray-400x400.jpg')} />
                  <Card.Body>
                      <Card.Title>Điện thoại iPhone Xs Max 64GB</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary mr-2">Detail</Button>
                      <Button variant="primary">Cart</Button>
                  </Card.Body>
              </Card>              
        </div>
      );
    }
  }
  
  export default Smartphone;