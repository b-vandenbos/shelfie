require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let controller = require('./controller.js');
let app = express();
let {SERVER_PORT, CONNECTION_STRING}  = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB set');
})

// app.get('/api/products', (req, res) => {
//     req.app.get('db')
//     .show_products()
//     .then(products => res.status(200).send(products))
//     .catch(err => console.log('there was an error loading ALL the products', err));
// });

app.get('/api/products', controller.showProducts);
app.post('/api/product', controller.createProduct);
app.put('/api/products/:id', controller.updateProduct);
app.delete('/api/products/:id', controller.deleteProduct);

app.listen(SERVER_PORT, () => console.log(`The server is listening on port ${SERVER_PORT}`));

