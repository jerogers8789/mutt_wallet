// import models
const User = require('./User');

// Products belongsTo Category
Wallet.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = {
 User,
 Wallet,
};