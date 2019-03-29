import React, {Component} from 'react';
import "./product.css";

export default class Product extends Component {
    

render() {
    let {product, deleteProduct, edit} = this.props;
    return (
        <div className='product'>
            <img className="product-image" src={product.img} alt={product.name}/>
            <div className='product-info'>
                <div className="product-info-text">
                    <p className='product-name'>{product.name}</p>
                    <p className='product-price'>${product.price}</p>
                </div>
                <div className='product-edit-buttons'>
                    <button className="edit-button" onClick={() => deleteProduct(product.id)}>Delete</button>
                    <button className="edit-button" onClick={edit}>Edit</button>
                </div>
            </div>

        </div>
    )
}

}