import React, {Component} from 'react';
import "./form.css";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            imageUrl: '',
            product: '',
            price: ''
        };

        this.cancel = this.cancel.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    watchImageUrl(val) {
        this.setState({imageUrl: val});
    }

    watchProduct(val) {
        this.setState({product: val});
    }

    watchPrice(val) {
        this.setState({price: val});
    }

    cancel() {
        this.setState({imageUrl: ''});
        this.setState({product: ''});
        this.setState({price: ''});
    }
    
    createProduct() {
        let {product, price, imageUrl} = this.state;
        let {createProduct, loadProducts} = this.props;
        if (imageUrl === '') {
            imageUrl = 'data:image/png;base64,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'
        }
        let newProduct = {
            name: product,
            price,
            img: imageUrl
        };
        this.setState({imageUrl: ''});
        this.setState({product: ''});
        this.setState({price: ''});

        createProduct(newProduct);
        loadProducts();
      }

render() {
    let {edit} = this.props;

    return edit ? (
    <div className="form">
        <img className="form-picture" src={this.state.imageUrl} alt="" />
        <p className='form-input-label'>Image Url:</p>
        <input className="form-input" name="image-url" value={this.state.imageUrl} onChange={e => this.watchImageUrl(e.target.value)} />
        <p className='form-input-label'>Product Name:</p>
        <input className='form-input' name="product-name" value={this.state.product} onChange={e => this.watchProduct(e.target.value)} />
        <p className='form-input-label'>Price: </p>
        <input className='form-input' name="price" value={this.state.price} onChange={e => this.watchPrice(e.target.value)} />
        <div className='form-edit-buttons'>
            <button className='form-button' >Cancel</button>
            <button className='form-button' onClick={this.createProduct}>Add to Inventory</button>
        </div>
    EDIT PAGE
    </div>
    ) : (
        <div className="form">
        <img className="form-picture" src={this.state.imageUrl} alt="" />
        <p className='form-input-label'>Image Url:</p>
        <input className="form-input" name="image-url" value={this.state.imageUrl} onChange={e => this.watchImageUrl(e.target.value)} />
        <p className='form-input-label'>Product Name:</p>
        <input className='form-input' name="product-name" value={this.state.product} onChange={e => this.watchProduct(e.target.value)} />
        <p className='form-input-label'>Price: </p>
        <input className='form-input' name="price" value={this.state.price} onChange={e => this.watchPrice(e.target.value)} />
        <div className='form-edit-buttons'>
            <button className='form-button'>Cancel</button>
            <button className='form-button' onClick={this.createProduct}>Add to Inventory</button>
        </div>
    </div>
    )
}

}