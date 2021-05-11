const router = require('express').Router();
const userRoutes = require('./user-route');
const acctRoutes = require('./wallet-route');

router.use('/user', userRoutes);
router.use('/wallet', acctRoutes);

module.exports = router;