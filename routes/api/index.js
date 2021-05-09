const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./user-routes');
const acctRoutes = require('./wallet-routes');

router.use('/user', userRoutes);
router.use('/wallet', acctRoutes);
=======
const userRoute = require('./user-route');
const walletRoute = require('./wallet-route');
router.use('/wallet', walletRoute);
router.use('/users', userRoute);
>>>>>>> 74276a730d6669cdd1c5fc8e889e2da9a7c7afdc

module.exports = router;