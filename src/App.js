import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import ProductViewer from './components/productViewer';
import './App.css';

export class App extends Component {
  state= {
    productoInfo: {}
  }

  constructor() {
    super();
    
    fetch('adidas.com/api/checkout/basket', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(result => {
      this.setState({
        productoInfo: result
      });
    });
  }

  componentDidCatch(error, info) {
    console.log('hey', error, info)
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
       <HeaderComponent></HeaderComponent>
       <main>
        <ProductViewer></ProductViewer>
       </main>
      </div>
    );
  }
}

export default App;
