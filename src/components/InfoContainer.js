import React, { Component } from 'react';
import './productViewer.css';

export class InfoContainer extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      addingStatus: {},
      addingError: false,
      errorLoading: this.props.errorLoading
    }
  }

  handleAddBasket = (e) => {
    const dataToAdd = [
      {
        productId: 'TEMP',
        quantity: 1,
        recipe: {
          articleNumber: 'temp',
          quantity: 1,
          selectedOptions: {},
          sku: '560',
          countrySize: '42',
          technicalSize: '40'
        },
        recipeId: '34234234',
        customizationRecipeId: '123123123',
        masterProductId: '123123123',
        displaySize: '45',
        captchaResponse: '23',
        segmentationId: '65'
      }
    ]

    fetch('http://adidas.com/api/checkout/basket', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'same-origin',
      body: JSON.stringify(dataToAdd)
    })
    .then(res => res.json())
    .then(result => {
      this.setState({
        addingStatus: result
      });
    }).catch(function() {
      this.setState({
        addingError: true
      })
    });
  }

  render() {
    return (
       <div className="infoContainer">
       <div className="data">
       {this.state.errorLoading ? (
         <div>
           <h2>No data</h2>
           <p>We can't get the full info about this product</p>
         </div>
       ) : (
         <div>
           <h2>Data</h2>
           <p>The information about the product</p>
         </div>
       )}
       </div>
        <button className="addToBasket" onClick={this.handleAddBasket} disabled={this.props.errorLoading}>add to basket</button>
        </div>
    );
  }
}

InfoContainer.defaultProps = {
  errorLoading: false,
  addingError: false
}

export default InfoContainer;
