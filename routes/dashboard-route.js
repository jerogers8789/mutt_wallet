const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router
.route('/new')
.get((req, res) => {
    try {
    res.render('new-wallet');
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});



module.exports = router;