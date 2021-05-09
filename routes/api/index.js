const router = require('express').Router();
const userRoute = require('./user-route');
const walletRoute = require('./wallet-route');
router.use('/wallet', walletRoute);
router.use('/users', userRoute);

module.exports = router;