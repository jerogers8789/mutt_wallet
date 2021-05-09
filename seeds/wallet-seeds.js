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

