import React, {Component} from 'react';
import "./dashboard.css";
import Product from '../Product/Product';

export default class Dashboard extends Component {

render() {
    let {products, deleteProduct, loadProducts, edit, cancelEdit} = this.props;
    return (
        <div className='product-container'>
            {
                products.map((product, index) => {
                return <Product key={index} product={product} deleteProduct={deleteProduct} loadProducts={loadProducts} edit={edit} cancelEdit={cancelEdit}/>
                })
            }
            
        </div>

    )
}

}