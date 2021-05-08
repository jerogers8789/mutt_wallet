const router = require('express').Router();
const { Wallet} = require('../../models');

// The `/api/products` endpoint

// get wallet
router.get('/', (req, res) => {
  // find all wallet
  // be sure to include its associated Category and Tag data
    Product.findAll({
      include: [{
            model: Wallet,
        },
    ]
  })

  .then(blockchain_db => res.json(blockchain_db))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

module.exports = router;