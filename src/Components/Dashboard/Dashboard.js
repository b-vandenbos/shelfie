import React, {Component} from 'react';
import "./dashboard.css";
import Product from '../Product/Product';

export default class Dashboard extends Component {

render() {
    let {products, updateProduct, deleteProduct, loadProducts} = this.props;
    return (
        <div className='product-container'>
            {
                products.map((product, index) => {
                return <Product key={index} product={product} deleteProduct={deleteProduct} loadProducts={loadProducts} updateProduct={updateProduct} />
                })
            }
            
        </div>

    )
}

}