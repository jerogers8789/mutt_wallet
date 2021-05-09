// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize user model (table) by extending off Sequelize's Model class
class user extends Model {}

// set up fields and rules for user model
user.init(
  {
    // define columns
    wallet_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },

    user_name: {
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
    modelName: 'user',
  }
);

module.exports = user;