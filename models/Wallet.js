// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from connection.js
const sequelize = require('../config/connection');

class wallet extends Model {}

// set up fields and rules for wallet model
wallet.init(
  {
    // define columns
    wallet_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },

    wallet_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wallet',
  }
);

module.exports = wallet;