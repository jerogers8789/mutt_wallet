const router = require('express').Router();
const userRoutes = require('./user-routes');
const acctRoutes = require('./wallet-routes');

router.use('/user', userRoutes);
router.use('/wallet', acctRoutes);

module.exports = router;