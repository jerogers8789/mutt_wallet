const { User } = require('../models');

const userData = [
    {
        post_content: 'placeholder text values',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;