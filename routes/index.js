const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

=======
const homepageRoute = require('./homepage-route.js');
const dashRoute = require('./dash-route.js');
router.use('/api', apiRoutes);
router.use('/', homepageRoute);
router.use('/dashboard', dashRoute);
router.use((req, res) => {
    res.status(404).end();
});
>>>>>>> 74276a730d6669cdd1c5fc8e889e2da9a7c7afdc
module.exports = router;