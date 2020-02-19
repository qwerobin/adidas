import React, { Component } from 'react';

export class ErrorProduct extends Component {
  render() {
    return (
       <div className="ErrorContainer">
       <h1>Error</h1>
        <p>This product couldn't be loaded</p>
        <img src="https://img.pngio.com/joy-upside-down-transparent-png-stickpng-inside-out-inside-out-sadness-png-840_995.png" alt="error" />
      </div>
    );
  }
}

export default ErrorProduct;
