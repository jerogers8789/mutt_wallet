const { Post } = require('../models');

const postData = [
    {
        post_content: 'placeholder text values',
    },
    {
    },
    {
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

