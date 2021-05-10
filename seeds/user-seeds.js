const { User } = require('../models');

const userData = [
    {
        post_content: 'placeholder text values',
        username: 'placeholder username',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;