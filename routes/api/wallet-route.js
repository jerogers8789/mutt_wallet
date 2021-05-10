const router = require('express').Router();
const { Wallet } = require('../../models');

// The `/api/products` endpoint

// get wallet data
router.get('/', (req, res) => {
  // find wallet
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