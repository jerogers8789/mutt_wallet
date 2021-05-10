const { Wallet } = require('../models');

const walletData = [
    {
        post_content: 'placeholder text values',
        walletData: 'placeholder wallet infor'
    },
]

const seedWallet = () => Wallet.bulkCreate(walletData);

module.exports = seedWallet;

