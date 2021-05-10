const User = require('./User');

Wallet.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = {
 User,
 Wallet,
};