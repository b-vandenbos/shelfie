module.exports = {
    showProducts: (req, res) => {
        req.app.get('db')
        .show_products()
        .then(products => res.status(200).send(products))
        .catch(err => console.log(`there was an error loading ALL the products: ${err}`));
    },

    createProduct: (req, res) => {
        let {name, price, img} = req.body;
        req.app.get('db')
        .create_product([name, price, img])
        .then(products => res.status(200).send(products))
        .catch(err => console.log(`There was an error creating this product: ${err}`));
    },

    updateProduct: (req, res) => {
        let {id} = req.params;
        let {name, price, img} = req.body;
        req.app.get('db')
        .update_product([id, name, price, img])
        .then(products => res.status(200).send(products))
        .catch(err => console.log(`There was an error in updating this product: ${err}`));
    },

    deleteProduct: (req, res) => {
        let {id} = req.params;
        req.app.get('db')
        .delete_product(id)
        .then(products => res.status(200).send(products))
        .catch(err => console.log(`There was an error in deleting this product: ${err}`));
    }

}