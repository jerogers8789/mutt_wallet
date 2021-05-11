const sequelize = require('../config/connection');
const { User } = require('../models');
const router = require('express').Router();

router.route('/login')
.get((req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
router.route('/signup')
.get((req, res) => {
    res.render('signup');
});
module.exports = router