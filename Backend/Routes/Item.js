const router = require('express').Router();
let Product = require('../models/Items.model')




router.route('/').get((req, res) => {
  Product.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const inventory = req.body.inventory;
    const deliveryDate = Date.parse(req.body.deliveryDate);
    const deliveryPrice = req.body.deliveryPrice;
    const salesPrice = req.body.salesPrice;


  const newProduct = new Product({
      name,
      inventory,
      deliveryDate,
      deliveryPrice,
      salesPrice,
  });

  newProduct.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(item => {
            Product.name = req.body.name;
            Product.inventory = req.body.inventory;
            Product.deliveryDate = Date.parse(eq.body.deliveryDate);
            Product.deliveryPrice = req.body.deliveryPrice;
            Product.salesPrice = req.body.salesPrice;


      product.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
