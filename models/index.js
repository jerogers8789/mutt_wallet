const User = require('./User');
const Wallet = require('./Wallet');

Wallet.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = {
 User,
 Wallet,
};