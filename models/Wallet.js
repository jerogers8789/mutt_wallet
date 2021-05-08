// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from connection.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Wallet extends Model {}

// set up fields and rules for Wallet model
Wallet.init(
  {
    // define columns
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true  
     },

    wallet_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Wallet;
