const Products = require('./products');
const express = require('express');
const router = express.Router();


//create a new product
router.post('/products',async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        await newProduct.save();
        res.status(201).send(newProduct);

    } catch (error) {
        res.status(400).send(error);
    }
});
//get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});
//get a product by id
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});
//update a product by id
router.put('/products/:id', async (req, res) => {
    try {

        const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});
//delete a product by id
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
        
    
  
