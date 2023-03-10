const router = require('express').Router();
let Product = require('../models/Items.model')




router.route('/').get((req, res) => {
  Product.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/find/:title').get((req, res) => {
//   const { title } = req.params;

//   Product.findOne({ title })
//     .then((product) => {
//       if (!product) {
//         return res.status(400).json({ message: 'Product not found' });
//       }

//       return res.json({ product });
//     }     

// })
// unfinished change
  
router.route('/add').post((req, res) => {
  console.log("line is being hit")
  console.log(req.body)
   
    const productname = req.body.name;
    
const ObjectId = require("mongodb").ObjectId

  const newProduct = new Product(req.body);

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log("single iten line is being hit")
 
  Product.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/find/:title').get((req, res) => {
  console.log("single iten line is being hit")
 
//   Product.findOne({ title: req.params.title })
//     .then(item => res.json(item))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("update line is being hit");
      res.json('updated');
    })
    .catch(err => {
      console.log(err);
      res.status(400).json('Error: ' + err);
    });
});

    

module.exports = router;
