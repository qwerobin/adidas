import React, { Component } from 'react';
import InfoContainer from './InfoContainer'
import ErrorProduct from './ErrorProduct'
import './productViewer.css';

export class ProductViewer extends Component {
  constructor(props) {
    super(props);

    this.state= {
      productoInfo: {},
      errorLoading: false
    }
  }

  componentDidMount() {
    let currentComponent = this;

    fetch('https://adidas.com/api/products/C77124', {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(result => {
      currentComponent.setState({
        productoInfo: result
      });
    }).catch(function() {
      currentComponent.setState({
        errorLoading: true
      })
    });
  }

  render() {
    return (
      <div className="productViewer">
       <div className="imageViewer">
         <div className="imageContainer">
         {this.state.errorLoading ? (
           <ErrorProduct />
         ) : (
            <img alt="test" src="https://dafitistaticco-a.akamaihd.net/p/adidas-performance-9008-2173401-1-zoom.jpg"/>
         )}
         </div>
       </div>
       <div className="infoViewer">
       <InfoContainer errorLoading={this.state.errorLoading}></InfoContainer>
       </div>
      </div>
    );
  }
}

export default ProductViewer;
