<<<<<<< HEAD
const { Post } = require('../models');

const postData = [
    {
        title: 'wallet 1',
        post_content: 'placeholder text values',
    },
    {
        title: 'wallet 2',
        post_content: 'placeholder text values',
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
=======
const { Wallet } = require('../models');

const walletData = [
    {
        post_content: 'placeholder text values',
    },
    {
    },
    {
    },
]

const seedWallet = () => Wallet.bulkCreate(walletData);

module.exports = seedWallet;

>>>>>>> 74276a730d6669cdd1c5fc8e889e2da9a7c7afdc
