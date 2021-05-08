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