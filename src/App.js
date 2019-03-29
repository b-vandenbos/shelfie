import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    }

    this.loadProducts = this.loadProducts.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

componentDidMount() {
  this.loadProducts();
}

loadProducts() {
  axios.get('/api/products')
  .then(results => this.setState({products: results.data}))
  .catch(err => console.log(`There was an error in loading the posts: ${err}`));
}

createProduct(product) {
  axios.post(`api/product`, product)
  .then(results => this.setState({products: results.data}))
  .catch(err => console.log(`There was an error in creating this product: ${err}`));
  this.loadProducts();
}

deleteProduct(id) {
  axios.delete(`/api/products/${id}`)
  .then(results => this.setState({products: results.data}))
  .catch(err => console.log(`There was an error in deleting this product: ${err}`));
  this.loadProducts();
}

updateProduct(product) {
  axios.put(`/api/products/${product.id}`, product)
  .then(results => this.setState({products: results.data}))
  .catch(err => console.log(`There was an error in updating this product: ${err}`));
}
  
  render() {
    let {products} = this.state;
    return (
      <div className="container">
        <Header />
        <section>
          <Dashboard products={products} deleteProduct={this.deleteProduct} loadProducts={this.loadProducts} updateProduct={this.updateProduct}/>
          <Form createProduct={this.createProduct} loadProducts={this.loadProducts}/>
        </section>
      </div>
    ) 
  }
}

export default App;
