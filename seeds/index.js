const seedWallet = require('./wallet-seeds');
const seedUser = require('./user-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWallet();
  console.log('\n----- WALLET SEEDED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');
  await seedUser();


  process.exit(0);
};

seedAll();