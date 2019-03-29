import React, {Component} from 'react';
import "./form.css";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            imageUrl: '',
            product: '',
            price: '',
            edit: false
        };

        this.cancel = this.cancel.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
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

    cancelEdit() {
        this.setState({edit: false});
    }
    
    createProduct() {
        let {product, price, imageUrl} = this.state;
        let {createProduct} = this.props;
        let newProduct = {
            name: product,
            price,
            img: imageUrl
        };
        this.setState({imageUrl: ''});
        this.setState({product: ''});
        this.setState({price: ''});

        createProduct(newProduct);
      }

render() {
    let {edit} = this.state;

    return  edit ? (
        <div className="form">
        EDIT
        <img className="form-picture" src={this.state.imageUrl} alt="" />
            <p className='form-input-label'>Image Url:</p>
            <input className="form-input" name="image-url" value={this.state.imageUrl} onChange={e => this.watchImageUrl(e.target.value)} />
            <p className='form-input-label'>Product Name:</p>
            <input className='form-input' name="product-name" value={this.state.product} onChange={e => this.watchProduct(e.target.value)} />
            <p className='form-input-label'>Price: </p>
            <input className='form-input' name="price" value={this.state.price} onChange={e => this.watchPrice(e.target.value)} />
            <div className='form-edit-buttons'>
                <button className='form-button' onClick={this.cancelEdit}>Cancel</button>
                <button className='form-button' onClick={this.updateProduct}>Save Changes</button>
            </div>
        </div>
    )  : (
        <div className="form">
        <img className="form-picture" src={this.state.imageUrl} alt="" />
            <p className='form-input-label'>Image Url:</p>
            <input className="form-input" name="image-url" value={this.state.imageUrl} onChange={e => this.watchImageUrl(e.target.value)} />
            <p className='form-input-label'>Product Name:</p>
            <input className='form-input' name="product-name" value={this.state.product} onChange={e => this.watchProduct(e.target.value)} />
            <p className='form-input-label'>Price: </p>
            <input className='form-input' name="price" value={this.state.price} onChange={e => this.watchPrice(e.target.value)} />
            <div className='form-edit-buttons'>
                <button className='form-button' onClick={this.cancel}>Cancel</button>
                <button className='form-button' onClick={this.createProduct}>Add to Inventory</button>
            </div>
        </div>
    )
}

}