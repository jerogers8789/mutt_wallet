const router = require('express').Router();
const { User, Wallet } = require('../../models');
router.route('/')
.get(async (req, res) => {
    try {const userData = await User.findAll({
        attributes: { exclude: ['password']}
    }).then(userData => res.json(userData))}
    catch(err) {
        res.status(500).json(err);
    }
})
.post( async (req, res) => {
    try { const userData = await User.create({
        username: req.body.username,
        password: req.body.password
    }).then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });
    })}
    catch(err) {
        res.status(500).json(err);
    }
});
router.route('/:id')
.get( async (req, res) => {
    try { const userData = await User.findByPK({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }